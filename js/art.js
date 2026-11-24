// Crisp SVG Brand Artwork Generator for Enjoy Coupons Clone
(function () {
  function encodeSvg(svg) {
    return 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(svg.trim());
  }

  function escapeXml(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }

  function makeBrandSvg(config) {
    const bg = config.bg || '#111111';
    const fg = config.fg || '#ffffff';
    const accent = config.accent || '#ff4d4d';
    const style = config.style || 'wordmark';
    const label = escapeXml(config.label || 'Brand');
    const sub = escapeXml(config.sub || '');

    let inner = '';

    switch (style) {
      case 'aliexpress':
        inner = `
          <rect width="400" height="280" fill="#ff274b"/>
          <text x="200" y="152" text-anchor="middle" fill="#ffffff" font-family="Poppins, Arial, sans-serif" font-size="52" font-weight="500" letter-spacing="-1">AliExpress</text>
          <text x="336" y="130" fill="#ffffff" font-family="Arial, sans-serif" font-size="11" font-weight="600">TM</text>
        `;
        break;

      case 'amazon':
        inner = `
          <rect width="400" height="280" fill="#131921"/>
          <text x="200" y="148" text-anchor="middle" fill="#ffffff" font-family="Arial, Helvetica, sans-serif" font-size="60" font-weight="800" letter-spacing="-2">amazon</text>
          <path d="M126 164 Q205 204 282 164" fill="none" stroke="#ff9900" stroke-width="8" stroke-linecap="round"/>
          <path d="M270 158 L288 163 L277 179" fill="none" stroke="#ff9900" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>
        `;
        break;

      case 'fashionnova':
        inner = `
          <rect width="400" height="280" fill="#000000"/>
          <text x="200" y="150" text-anchor="middle" fill="#ffffff" font-family="Arial, Helvetica, sans-serif" font-size="38" letter-spacing="1">
            <tspan font-weight="300">FASHION</tspan><tspan font-weight="800">NOVA</tspan>
          </text>
        `;
        break;

      case 'ebay':
        inner = `
          <rect width="400" height="280" fill="#f5f5f5"/>
          <text x="200" y="164" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="88" font-weight="800" letter-spacing="-5">
            <tspan fill="#e53238">e</tspan><tspan fill="#0064d2">b</tspan><tspan fill="#f5af02">a</tspan><tspan fill="#86b817">y</tspan>
          </text>
          <text x="315" y="114" fill="#666" font-family="Arial, sans-serif" font-size="11" font-weight="700">TM</text>
        `;
        break;

      case 'nike':
        inner = `
          <rect width="400" height="280" fill="#d91b14"/>
          <text x="205" y="128" text-anchor="middle" fill="#ffffff" font-family="Impact, Arial Black, sans-serif" font-size="78" font-style="italic" letter-spacing="2">NIKE</text>
          <path d="M98 135 C74 185 88 232 145 224 C198 216 286 164 338 134 C264 159 175 186 140 183 C112 180 105 159 116 135 Z" fill="#ffffff"/>
        `;
        break;

      case 'gymshark':
        inner = `
          <rect width="400" height="280" fill="#000000"/>
          <text x="172" y="152" text-anchor="middle" fill="#ffffff" font-family="Impact, Arial Narrow, sans-serif" font-size="52" letter-spacing="1.5">GYMSHARK</text>
          <polygon points="300,118 352,126 322,158 326,136 300,136" fill="none" stroke="#ffffff" stroke-width="5" stroke-linejoin="round"/>
        `;
        break;

      case 'casetify':
        inner = `
          <rect width="400" height="280" fill="#eb5d52"/>
          <g transform="rotate(-7 200 140)">
            <rect x="64" y="102" width="272" height="72" fill="#000000"/>
            <text x="200" y="151" text-anchor="middle" fill="#ffffff" font-family="Arial, Helvetica, sans-serif" font-size="36" font-weight="800" letter-spacing="6">CASETiFY</text>
            <circle cx="241" cy="118" r="5" fill="#eb5d52"/>
          </g>
        `;
        break;

      case 'skims':
        inner = `
          <rect width="400" height="280" fill="#ffffff"/>
          <text x="200" y="168" text-anchor="middle" fill="#b89b87" font-family="Arial Black, Impact, sans-serif" font-size="78" font-weight="900" letter-spacing="3">SKIMS</text>
        `;
        break;

      case 'spotify':
        inner = `
          <rect width="400" height="280" fill="#191414"/>
          <circle cx="200" cy="122" r="56" fill="#1DB954"/>
          <path d="M168 106 Q200 94 234 108" fill="none" stroke="#191414" stroke-width="8" stroke-linecap="round"/>
          <path d="M174 124 Q200 115 227 126" fill="none" stroke="#191414" stroke-width="7" stroke-linecap="round"/>
          <path d="M180 141 Q200 135 221 143" fill="none" stroke="#191414" stroke-width="6" stroke-linecap="round"/>
          <text x="200" y="218" text-anchor="middle" fill="#ffffff" font-family="Arial, sans-serif" font-size="34" font-weight="800">Spotify</text>
        `;
        break;

      case 'chatgpt':
        inner = `
          <rect width="400" height="280" fill="#0f7c60"/>
          <g transform="translate(200,140)" fill="none" stroke="#b9ece0" stroke-width="11">
            <circle cx="0" cy="-34" r="28"/>
            <circle cx="30" cy="-17" r="28"/>
            <circle cx="30" cy="17" r="28"/>
            <circle cx="0" cy="34" r="28"/>
            <circle cx="-30" cy="17" r="28"/>
            <circle cx="-30" cy="-17" r="28"/>
          </g>
        `;
        break;

      case 'crunchyroll':
        inner = `
          <rect width="400" height="280" fill="#f7f7f7"/>
          <circle cx="200" cy="112" r="66" fill="#f47521"/>
          <circle cx="216" cy="112" r="46" fill="#f7f7f7"/>
          <circle cx="226" cy="112" r="34" fill="#f47521"/>
          <circle cx="242" cy="98" r="11" fill="#f7f7f7"/>
          <text x="200" y="226" text-anchor="middle" fill="#f47521" font-family="Arial, sans-serif" font-size="40" font-weight="800">crunchyroll</text>
        `;
        break;

      case 'applemusic':
        inner = `
          <defs>
            <linearGradient id="amg" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#fa243c"/>
              <stop offset="50%" stop-color="#c445ff"/>
              <stop offset="100%" stop-color="#22c1f1"/>
            </linearGradient>
          </defs>
          <rect width="400" height="280" fill="#f4f5f7"/>
          <rect x="98" y="38" width="204" height="204" rx="44" fill="#ffffff" stroke="url(#amg)" stroke-width="8"/>
          <path d="M174 186 V100 L248 84 V170" fill="none" stroke="url(#amg)" stroke-width="14" stroke-linecap="round" stroke-linejoin="round"/>
          <circle cx="158" cy="186" r="18" fill="url(#amg)"/>
          <circle cx="232" cy="170" r="18" fill="url(#amg)"/>
        `;
        break;

      case 'disney':
        inner = `
          <rect width="400" height="280" fill="#eef4fa"/>
          <path d="M90 124 Q202 30 302 126" fill="none" stroke="#113ccf" stroke-width="6" stroke-linecap="round"/>
          <text x="182" y="182" text-anchor="middle" fill="#0b2369" font-family="Georgia, serif" font-size="68" font-weight="700" font-style="italic">Disney</text>
          <text x="318" y="182" text-anchor="middle" fill="#113ccf" font-family="Arial, sans-serif" font-size="62" font-weight="700">+</text>
        `;
        break;

      case 'ubereats':
        inner = `
          <rect width="400" height="280" fill="#000000"/>
          <text x="200" y="128" text-anchor="middle" fill="#ffffff" font-family="Arial, Helvetica, sans-serif" font-size="78" font-weight="600">Uber</text>
          <text x="200" y="206" text-anchor="middle" fill="#06c167" font-family="Arial, Helvetica, sans-serif" font-size="82" font-weight="700">Eats</text>
        `;
        break;

      case 'uber':
        inner = `
          <rect width="400" height="280" fill="#000000"/>
          <text x="200" y="162" text-anchor="middle" fill="#ffffff" font-family="Arial, Helvetica, sans-serif" font-size="86" font-weight="600">Uber</text>
        `;
        break;

      case 'msrewards':
        inner = `
          <rect width="400" height="280" fill="#00b4f0"/>
          <polygon points="105,28 160,28 210,162 155,162" fill="#0067b8"/>
          <polygon points="295,28 240,28 190,162 245,162" fill="#0078d4"/>
          <polygon points="145,28 178,28 212,140 179,140" fill="#ffffff"/>
          <polygon points="255,28 222,28 188,140 221,140" fill="#ffffff"/>
          <circle cx="200" cy="186" r="58" fill="#ffb900" stroke="#f7630c" stroke-width="10"/>
        `;
        break;

      case 'lyft':
        inner = `
          <rect width="400" height="280" fill="#ff00bf"/>
          <text x="200" y="170" text-anchor="middle" fill="#ffffff" font-family="Arial Black, sans-serif" font-size="96" font-weight="900">lyft</text>
        `;
        break;

      case 'airbnb':
        inner = `
          <rect width="400" height="280" fill="#ff5a5f"/>
          <path d="M200 66 C182 66 150 132 150 162 C150 184 166 196 184 196 C194 196 200 190 200 190 C200 190 206 196 216 196 C234 196 250 184 250 162 C250 132 218 66 200 66 Z" fill="none" stroke="#ffffff" stroke-width="11"/>
          <circle cx="200" cy="152" r="14" fill="none" stroke="#ffffff" stroke-width="9"/>
          <text x="200" y="240" text-anchor="middle" fill="#ffffff" font-family="Arial, sans-serif" font-size="34" font-weight="700">airbnb</text>
        `;
        break;

      case 'sims4':
        inner = `
          <rect width="400" height="280" fill="#1a4e8a"/>
          <polygon points="200,36 244,122 200,208 156,122" fill="#5fd024" stroke="#ffffff" stroke-width="6"/>
          <text x="200" y="252" text-anchor="middle" fill="#ffffff" font-family="Arial Black, sans-serif" font-size="34" font-weight="900">THE SIMS 4</text>
        `;
        break;

      case 'doordash':
        inner = `
          <rect width="400" height="280" fill="#ff3008"/>
          <path d="M110 132 H256 C278 132 288 152 276 168 L260 186 H158 L174 164 H238 C245 164 246 152 236 152 H126 Z" fill="#ffffff"/>
          <text x="200" y="232" text-anchor="middle" fill="#ffffff" font-family="Arial, sans-serif" font-size="34" font-weight="800" letter-spacing="1">DOORDASH</text>
        `;
        break;

      case 'target':
        inner = `
          <rect width="400" height="280" fill="#cc0000"/>
          <circle cx="200" cy="126" r="64" fill="none" stroke="#ffffff" stroke-width="22"/>
          <circle cx="200" cy="126" r="22" fill="#ffffff"/>
          <text x="200" y="238" text-anchor="middle" fill="#ffffff" font-family="Arial, sans-serif" font-size="34" font-weight="800">TARGET</text>
        `;
        break;

      default:
        inner = `
          <rect width="400" height="280" fill="${bg}"/>
          <circle cx="345" cy="40" r="90" fill="${accent}" opacity="0.16"/>
          <circle cx="48" cy="245" r="78" fill="${accent}" opacity="0.14"/>
          <text x="200" y="${sub ? '138' : '152'}" text-anchor="middle" fill="${fg}" font-family="Lexend Deca, Arial, sans-serif" font-size="${label.length > 10 ? 40 : 54}" font-weight="800" letter-spacing="0.5">${label}</text>
          ${sub ? `<text x="200" y="182" text-anchor="middle" fill="${fg}" opacity="0.78" font-family="Lexend Deca, Arial, sans-serif" font-size="18" font-weight="600" letter-spacing="2">${sub}</text>` : ''}
        `;
    }

    return encodeSvg(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 280">${inner}</svg>`);
  }

  window.EnjoyArt = {
    makeBrandSvg: makeBrandSvg
  };
})();
