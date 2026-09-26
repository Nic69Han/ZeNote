/**
 * Les origines de l'application, tirées de l'environnement — jamais de la requête.
 *
 * Change `comptes-utilisateurs`, décision 6. Netlify pose `URL` (production) et
 * `DEPLOY_PRIME_URL` (aperçu ou branche) ; `ZENOTE_ORIGINES` (liste séparée par des
 * virgules) sert au développement local et à la vérification bout en bout.
 */
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
