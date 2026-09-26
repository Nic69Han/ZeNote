/**
 * Les origines admises pour les requêtes de compte qui modifient un état.
 *
 * Change `comptes-utilisateurs`, décisions 5 et 6. Une requête n'est admise que si
 * son en-tête `Origin` est l'origine même de la requête (même site, contrefaçon
 * exclue) **et** une origine de ce site :
 * - celles que l'environnement déclare (`URL`, `DEPLOY_PRIME_URL`, `DEPLOY_URL`, et
 *   `ZENOTE_ORIGINES` pour le local et le bout-en-bout) ;
 * - l'adresse du site que Netlify passe à la fonction (`context.site.url`) ;
 * - ses adresses de déploiement `https://…--<nom du site>.netlify.app` (aperçus,
 *   branches), que Netlify ne route que vers ce site.
 *
 * Les variables d'environnement de construction ne sont pas toutes visibles des
 * fonctions : c'est pourquoi le contexte du site compte aussi.
 */

export interface SiteNetlify {
  url?: string;
  name?: string;
}

export function originesAttendues(env: Record<string, string | undefined> = process.env): string[] {
  const brutes = [env.URL, env.DEPLOY_PRIME_URL, env.DEPLOY_URL, ...(env.ZENOTE_ORIGINES ?? '').split(',')];
  const origines = new Set<string>();
  for (const b of brutes) {
    if (!b?.trim()) continue;
    try {
      origines.add(new URL(b.trim()).origin);
    } catch {
      // Une valeur illisible n'autorise rien.
    }
  }
  return [...origines];
}

/** Le contrôle d'origine, prêt à l'emploi : `(origine, requête) → admise ?`. */
export function controleOrigine(
  env: Record<string, string | undefined> = process.env,
  site: SiteNetlify = {},
): (origine: string, requete: Request) => boolean {
  const connues = new Set(originesAttendues(env));
  try {
    if (site.url) connues.add(new URL(site.url).origin);
  } catch {
    // Rien de plus.
  }
  const deploiement =
    site.name && /^[a-z0-9-]+$/.test(site.name)
      ? new RegExp(`^https://[a-z0-9-]+--${site.name}\\.netlify\\.app$`)
      : null;
  return (origine, requete) => {
    if (origine !== new URL(requete.url).origin) return false;
    return connues.has(origine) || (deploiement?.test(origine) ?? false);
  };
}
