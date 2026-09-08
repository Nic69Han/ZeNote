#!/usr/bin/env bash
# Set up the ZeNote agent environment: OpenSpec + RTK + Caveman.
#
#   bash scripts/setup-env.sh
#
# Idempotent: safe to re-run. Installs user-level tools only (no sudo).
set -euo pipefail

REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
BIN_DIR="${HOME}/.local/bin"
RTK_VERSION="${RTK_VERSION:-latest}"

info() { printf '\033[36m==>\033[0m %s\n' "$*"; }
warn() { printf '\033[33m[warn]\033[0m %s\n' "$*"; }

mkdir -p "$BIN_DIR"
export PATH="$BIN_DIR:$PATH"

# ---------------------------------------------------------------- RTK --------
# Rust Token Killer — compresses shell output before it reaches the agent.
# https://github.com/rtk-ai/rtk
install_rtk() {
  if command -v rtk >/dev/null 2>&1; then
    info "rtk already installed ($(rtk --version))"
    return
  fi

  local os arch target
  os="$(uname -s)"
  arch="$(uname -m)"
  case "${os}/${arch}" in
    Linux/x86_64)   target="rtk-x86_64-unknown-linux-musl.tar.gz" ;;
    Linux/aarch64)  target="rtk-aarch64-unknown-linux-gnu.tar.gz" ;;
    Darwin/x86_64)  target="rtk-x86_64-apple-darwin.tar.gz" ;;
    Darwin/arm64)   target="rtk-aarch64-apple-darwin.tar.gz" ;;
    *)
      warn "no prebuilt rtk for ${os}/${arch}; try: brew install rtk"
      return
      ;;
  esac

  local url tmp
  if [ "$RTK_VERSION" = "latest" ]; then
    url="https://github.com/rtk-ai/rtk/releases/latest/download/${target}"
  else
    url="https://github.com/rtk-ai/rtk/releases/download/${RTK_VERSION}/${target}"
  fi

  info "installing rtk from ${url}"
  tmp="$(mktemp -d)"
  curl -fsSL --retry 3 -o "${tmp}/rtk.tar.gz" "$url"
  tar -xzf "${tmp}/rtk.tar.gz" -C "$tmp"
  install -m 0755 "$(find "$tmp" -type f -name rtk | head -n 1)" "${BIN_DIR}/rtk"
  rm -rf "$tmp"
  info "rtk installed ($(rtk --version))"
}

# ----------------------------------------------------------- OpenSpec --------
# Spec-driven development workflow (/opsx:* commands).
# https://github.com/Fission-AI/OpenSpec
install_openspec() {
  if command -v openspec >/dev/null 2>&1; then
    info "openspec already installed (v$(openspec --version))"
  else
    info "installing @fission-ai/openspec globally"
    npm install -g @fission-ai/openspec@latest
    info "openspec installed (v$(openspec --version))"
  fi

  if [ ! -f "${REPO_ROOT}/openspec/config.yaml" ]; then
    warn "openspec/ missing — run: openspec init --tools claude"
  fi
}

# ------------------------------------------------------------ Caveman --------
# Terse output skill, vendored at .claude/skills/caveman/SKILL.md.
# https://github.com/amanattar/caveman-claude-skill
check_caveman() {
  if [ -f "${REPO_ROOT}/.claude/skills/caveman/SKILL.md" ]; then
    info "caveman skill present (.claude/skills/caveman/SKILL.md)"
  else
    warn "caveman skill missing — re-clone from amanattar/caveman-claude-skill"
  fi
}

install_rtk
install_openspec
check_caveman

cat <<'EOF'

Environment ready.

  rtk       compresses bash output (hook in .claude/settings.json)
  openspec  /opsx:explore, /opsx:propose, /opsx:apply, /opsx:archive
  caveman   /caveman lite|full|ultra

If rtk is not on PATH, add this to your shell profile:
  export PATH="$HOME/.local/bin:$PATH"
EOF
