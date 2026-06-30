// Mačacie Pexeso - JavaScript Controller & Assets

// List of all 15 cute cat designs (SVG graphics)
const CAT_TEMPLATES = [
    {
        id: 'black',
        name: 'Black Cat',
        svg: `<svg viewBox="0 0 100 100">
            <defs>
                <radialGradient id="grad-black" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stop-color="#3d3550" />
                    <stop offset="100%" stop-color="#181522" />
                </radialGradient>
            </defs>
            <!-- Ears -->
            <polygon points="15,35 8,8 35,28" fill="#181522" stroke="#ffb8b8" stroke-width="0.5"/>
            <polygon points="20,32 14,14 32,27" fill="#ffb8b8" />
            <polygon points="85,35 92,8 65,28" fill="#181522" stroke="#ffb8b8" stroke-width="0.5"/>
            <polygon points="80,32 86,14 68,27" fill="#ffb8b8" />
            <!-- Head -->
            <ellipse cx="50" cy="52" rx="38" ry="32" fill="url(#grad-black)" />
            <!-- Eyes -->
            <ellipse cx="35" cy="48" rx="8" ry="10" fill="#26de81" />
            <ellipse cx="35" cy="48" rx="2" ry="7" fill="#000" />
            <circle cx="33" cy="44" r="2" fill="#fff" />
            <ellipse cx="65" cy="48" rx="8" ry="10" fill="#26de81" />
            <ellipse cx="65" cy="48" rx="2" ry="7" fill="#000" />
            <circle cx="63" cy="44" r="2" fill="#fff" />
            <!-- Nose & Mouth -->
            <polygon points="50,58 46,54 54,54" fill="#f15bb5" />
            <path d="M46,62 Q50,65 50,62 Q50,65 54,62" stroke="#ffb8b8" stroke-width="1.5" fill="none" stroke-linecap="round" />
            <!-- Cheeks -->
            <circle cx="23" cy="56" r="3.5" fill="#f15bb5" opacity="0.5" />
            <circle cx="77" cy="56" r="3.5" fill="#f15bb5" opacity="0.5" />
            <!-- Whiskers -->
            <line x1="18" y1="60" x2="2" y2="60" stroke="#776c8c" stroke-width="1.5" stroke-linecap="round" />
            <line x1="18" y1="65" x2="4" y2="68" stroke="#776c8c" stroke-width="1.5" stroke-linecap="round" />
            <line x1="82" y1="60" x2="98" y2="60" stroke="#776c8c" stroke-width="1.5" stroke-linecap="round" />
            <line x1="82" y1="65" x2="96" y2="68" stroke="#776c8c" stroke-width="1.5" stroke-linecap="round" />
        </svg>`
    },
    {
        id: 'white',
        name: 'White Cat',
        svg: `<svg viewBox="0 0 100 100">
            <!-- Ears -->
            <polygon points="15,35 8,8 35,28" fill="#f5f6fa" />
            <polygon points="20,32 14,14 32,27" fill="#ffb8b8" />
            <polygon points="85,35 92,8 65,28" fill="#f5f6fa" />
            <polygon points="80,32 86,14 68,27" fill="#ffb8b8" />
            <!-- Head -->
            <ellipse cx="50" cy="52" rx="38" ry="32" fill="#ffffff" stroke="#e1e8ed" stroke-width="1" />
            <!-- Eyes -->
            <ellipse cx="35" cy="48" rx="8" ry="10" fill="#00bbf9" />
            <ellipse cx="35" cy="48" rx="2" ry="7" fill="#000" />
            <circle cx="33" cy="44" r="2" fill="#fff" />
            <ellipse cx="65" cy="48" rx="8" ry="10" fill="#00bbf9" />
            <ellipse cx="65" cy="48" rx="2" ry="7" fill="#000" />
            <circle cx="63" cy="44" r="2" fill="#fff" />
            <!-- Nose & Mouth -->
            <polygon points="50,58 46,54 54,54" fill="#ff758c" />
            <path d="M46,62 Q50,65 50,62 Q50,65 54,62" stroke="#ff758c" stroke-width="1.5" fill="none" stroke-linecap="round" />
            <!-- Cheeks -->
            <circle cx="23" cy="56" r="4" fill="#ff758c" opacity="0.4" />
            <circle cx="77" cy="56" r="4" fill="#ff758c" opacity="0.4" />
            <!-- Whiskers -->
            <line x1="18" y1="60" x2="2" y2="60" stroke="#ced6e0" stroke-width="1.5" stroke-linecap="round" />
            <line x1="18" y1="65" x2="4" y2="68" stroke="#ced6e0" stroke-width="1.5" stroke-linecap="round" />
            <line x1="82" y1="60" x2="98" y2="60" stroke="#ced6e0" stroke-width="1.5" stroke-linecap="round" />
            <line x1="82" y1="65" x2="96" y2="68" stroke="#ced6e0" stroke-width="1.5" stroke-linecap="round" />
        </svg>`
    },
    {
        id: 'ginger',
        name: 'Ginger Cat',
        svg: `<svg viewBox="0 0 100 100">
            <!-- Ears -->
            <polygon points="15,35 8,8 35,28" fill="#e67e22" />
            <polygon points="20,32 14,14 32,27" fill="#ffb8b8" />
            <polygon points="85,35 92,8 65,28" fill="#e67e22" />
            <polygon points="80,32 86,14 68,27" fill="#ffb8b8" />
            <!-- Head -->
            <ellipse cx="50" cy="52" rx="38" ry="32" fill="#f39c12" />
            <!-- Orange Stripes -->
            <path d="M50,20 L50,32 M43,21 L45,30 M57,21 L55,30" stroke="#d35400" stroke-width="2.5" stroke-linecap="round" />
            <path d="M12,50 L24,50 M12,55 L20,55" stroke="#d35400" stroke-width="2.5" stroke-linecap="round" />
            <path d="M88,50 L76,50 M88,55 L80,55" stroke="#d35400" stroke-width="2.5" stroke-linecap="round" />
            <!-- Eyes -->
            <ellipse cx="35" cy="48" rx="8" ry="10" fill="#fee440" />
            <ellipse cx="35" cy="48" rx="2" ry="7" fill="#000" />
            <circle cx="33" cy="44" r="2" fill="#fff" />
            <ellipse cx="65" cy="48" rx="8" ry="10" fill="#fee440" />
            <ellipse cx="65" cy="48" rx="2" ry="7" fill="#000" />
            <circle cx="63" cy="44" r="2" fill="#fff" />
            <!-- Nose & Mouth -->
            <polygon points="50,58 46,54 54,54" fill="#ff758c" />
            <path d="M46,62 Q50,65 50,62 Q50,65 54,62" stroke="#d35400" stroke-width="1.5" fill="none" stroke-linecap="round" />
            <!-- Cheeks -->
            <circle cx="23" cy="56" r="3.5" fill="#e67e22" opacity="0.6" />
            <circle cx="77" cy="56" r="3.5" fill="#e67e22" opacity="0.6" />
            <!-- Whiskers -->
            <line x1="18" y1="60" x2="2" y2="60" stroke="#d35400" stroke-width="1.5" stroke-linecap="round" />
            <line x1="82" y1="60" x2="98" y2="60" stroke="#d35400" stroke-width="1.5" stroke-linecap="round" />
        </svg>`
    },
    {
        id: 'gray',
        name: 'Grey Cat',
        svg: `<svg viewBox="0 0 100 100">
            <!-- Ears -->
            <polygon points="15,35 8,8 35,28" fill="#7f8c8d" />
            <polygon points="20,32 14,14 32,27" fill="#ffb8b8" />
            <polygon points="85,35 92,8 65,28" fill="#7f8c8d" />
            <polygon points="80,32 86,14 68,27" fill="#ffb8b8" />
            <!-- Head -->
            <ellipse cx="50" cy="52" rx="38" ry="32" fill="#95a5a6" />
            <!-- Grey stripes on sides -->
            <path d="M12,48 L22,48 M12,53 L18,53" stroke="#7f8c8d" stroke-width="2.5" stroke-linecap="round" />
            <path d="M88,48 L78,48 M88,53 L82,53" stroke="#7f8c8d" stroke-width="2.5" stroke-linecap="round" />
            <!-- Eyes -->
            <ellipse cx="35" cy="48" rx="8" ry="10" fill="#26de81" />
            <ellipse cx="35" cy="48" rx="2" ry="7" fill="#000" />
            <circle cx="33" cy="44" r="2" fill="#fff" />
            <ellipse cx="65" cy="48" rx="8" ry="10" fill="#26de81" />
            <ellipse cx="65" cy="48" rx="2" ry="7" fill="#000" />
            <circle cx="63" cy="44" r="2" fill="#fff" />
            <!-- Nose & Mouth -->
            <polygon points="50,58 46,54 54,54" fill="#ff758c" />
            <path d="M46,62 Q50,65 50,62 Q50,65 54,62" stroke="#7f8c8d" stroke-width="1.5" fill="none" stroke-linecap="round" />
            <!-- Whiskers -->
            <line x1="18" y1="60" x2="2" y2="60" stroke="#7f8c8d" stroke-width="1.5" stroke-linecap="round" />
            <line x1="82" y1="60" x2="98" y2="60" stroke="#7f8c8d" stroke-width="1.5" stroke-linecap="round" />
        </svg>`
    },
    {
        id: 'siamese',
        name: 'Siamese Cat',
        svg: `<svg viewBox="0 0 100 100">
            <!-- Ears -->
            <polygon points="15,35 8,8 35,28" fill="#4a3728" />
            <polygon points="20,32 14,14 32,27" fill="#ffb8b8" />
            <polygon points="85,35 92,8 65,28" fill="#4a3728" />
            <polygon points="80,32 86,14 68,27" fill="#ffb8b8" />
            <!-- Head -->
            <ellipse cx="50" cy="52" rx="38" ry="32" fill="#f5f6fa" />
            <!-- Siamese Dark Mask -->
            <ellipse cx="50" cy="55" rx="25" ry="20" fill="#4a3728" />
            <!-- Eyes -->
            <ellipse cx="35" cy="48" rx="8" ry="10" fill="#00f5d4" />
            <ellipse cx="35" cy="48" rx="2" ry="7" fill="#000" />
            <circle cx="33" cy="44" r="2" fill="#fff" />
            <ellipse cx="65" cy="48" rx="8" ry="10" fill="#00f5d4" />
            <ellipse cx="65" cy="48" rx="2" ry="7" fill="#000" />
            <circle cx="63" cy="44" r="2" fill="#fff" />
            <!-- Nose & Mouth -->
            <polygon points="50,58 46,54 54,54" fill="#ff758c" />
            <path d="M46,62 Q50,65 50,62 Q50,65 54,62" stroke="#2d1f10" stroke-width="1.5" fill="none" stroke-linecap="round" />
            <!-- Whiskers -->
            <line x1="18" y1="60" x2="2" y2="60" stroke="#a4b0be" stroke-width="1.5" stroke-linecap="round" />
            <line x1="82" y1="60" x2="98" y2="60" stroke="#a4b0be" stroke-width="1.5" stroke-linecap="round" />
        </svg>`
    },
    {
        id: 'calico',
        name: 'Calico Cat',
        svg: `<svg viewBox="0 0 100 100">
            <!-- Ears -->
            <polygon points="15,35 8,8 35,28" fill="#e67e22" />
            <polygon points="85,35 92,8 65,28" fill="#2d3436" />
            <polygon points="20,32 14,14 32,27" fill="#ffb8b8" />
            <polygon points="80,32 86,14 68,27" fill="#ffb8b8" />
            <!-- Head -->
            <ellipse cx="50" cy="52" rx="38" ry="32" fill="#ffffff" stroke="#e1e8ed" stroke-width="1" />
            <!-- Orange & Dark spots -->
            <path d="M12,48 C16,40 25,42 22,54 C18,60 12,58 12,48 Z" fill="#e67e22" />
            <path d="M88,48 C84,40 75,42 78,54 C82,60 88,58 88,48 Z" fill="#2d3436" />
            <path d="M40,20 Q50,30 60,20 Q55,25 40,20 Z" fill="#e67e22" />
            <!-- Eyes -->
            <ellipse cx="35" cy="48" rx="8" ry="10" fill="#26de81" />
            <ellipse cx="35" cy="48" rx="2" ry="7" fill="#000" />
            <circle cx="33" cy="44" r="2" fill="#fff" />
            <ellipse cx="65" cy="48" rx="8" ry="10" fill="#26de81" />
            <ellipse cx="65" cy="48" rx="2" ry="7" fill="#000" />
            <circle cx="63" cy="44" r="2" fill="#fff" />
            <!-- Nose & Mouth -->
            <polygon points="50,58 46,54 54,54" fill="#ff758c" />
            <path d="M46,62 Q50,65 50,62 Q50,65 54,62" stroke="#2d3436" stroke-width="1.5" fill="none" stroke-linecap="round" />
            <!-- Whiskers -->
            <line x1="18" y1="60" x2="2" y2="60" stroke="#ced6e0" stroke-width="1.5" stroke-linecap="round" />
            <line x1="82" y1="60" x2="98" y2="60" stroke="#ced6e0" stroke-width="1.5" stroke-linecap="round" />
        </svg>`
    },
    {
        id: 'tuxedo',
        name: 'Tuxedo Cat',
        svg: `<svg viewBox="0 0 100 100">
            <!-- Ears -->
            <polygon points="15,35 8,8 35,28" fill="#2f3542" />
            <polygon points="20,32 14,14 32,27" fill="#ffb8b8" />
            <polygon points="85,35 92,8 65,28" fill="#2f3542" />
            <polygon points="80,32 86,14 68,27" fill="#ffb8b8" />
            <!-- Head -->
            <ellipse cx="50" cy="52" rx="38" ry="32" fill="#2f3542" />
            <!-- White Mask -->
            <path d="M50,42 L25,65 C30,75 70,75 75,65 Z" fill="#ffffff" />
            <!-- Eyes -->
            <ellipse cx="35" cy="48" rx="8" ry="10" fill="#fee440" />
            <ellipse cx="35" cy="48" rx="2" ry="7" fill="#000" />
            <circle cx="33" cy="44" r="2" fill="#fff" />
            <ellipse cx="65" cy="48" rx="8" ry="10" fill="#fee440" />
            <ellipse cx="65" cy="48" rx="2" ry="7" fill="#000" />
            <circle cx="63" cy="44" r="2" fill="#fff" />
            <!-- Nose & Mouth -->
            <polygon points="50,58 46,54 54,54" fill="#ff758c" />
            <path d="M46,62 Q50,65 50,62 Q50,65 54,62" stroke="#2f3542" stroke-width="1.5" fill="none" stroke-linecap="round" />
            <!-- Whiskers -->
            <line x1="18" y1="60" x2="2" y2="60" stroke="#f1f2f6" stroke-width="1.5" stroke-linecap="round" />
            <line x1="82" y1="60" x2="98" y2="60" stroke="#f1f2f6" stroke-width="1.5" stroke-linecap="round" />
        </svg>`
    },
    {
        id: 'persian',
        name: 'Persian Cat',
        svg: `<svg viewBox="0 0 100 100">
            <!-- Ears -->
            <polygon points="18,36 12,18 32,32" fill="#dfe4ea" />
            <polygon points="21,34 16,22 30,31" fill="#ffb8b8" />
            <polygon points="82,36 88,18 68,32" fill="#dfe4ea" />
            <polygon points="79,34 84,22 70,31" fill="#ffb8b8" />
            <!-- Fluffy Head -->
            <path d="M50,16 C12,16 6,36 6,52 C6,68 18,84 50,84 C82,84 94,68 94,52 C94,36 88,16 50,16 Z" fill="#f1f2f6" />
            <!-- Eyes -->
            <ellipse cx="36" cy="46" rx="8" ry="10" fill="#00bbf9" />
            <ellipse cx="36" cy="46" rx="3" ry="7" fill="#000" />
            <circle cx="34" cy="42" r="1.5" fill="#fff" />
            <ellipse cx="64" cy="46" rx="8" ry="10" fill="#00bbf9" />
            <ellipse cx="64" cy="46" rx="3" ry="7" fill="#000" />
            <circle cx="62" cy="42" r="1.5" fill="#fff" />
            <!-- Nose & Mouth (Persian high nose) -->
            <polygon points="50,50 47,47 53,47" fill="#ff758c" />
            <path d="M46,53 Q50,56 50,53 Q50,56 54,53" stroke="#a4b0be" stroke-width="1.5" fill="none" stroke-linecap="round" />
            <!-- Cheeks -->
            <circle cx="26" cy="56" r="6" fill="#ff758c" opacity="0.3" />
            <circle cx="74" cy="56" r="6" fill="#ff758c" opacity="0.3" />
            <!-- Whiskers -->
            <line x1="20" y1="52" x2="3" y2="52" stroke="#a4b0be" stroke-width="1.5" />
            <line x1="80" y1="52" x2="97" y2="52" stroke="#a4b0be" stroke-width="1.5" />
        </svg>`
    },
    {
        id: 'scottish',
        name: 'Scottish Fold',
        svg: `<svg viewBox="0 0 100 100">
            <!-- Folded Ears -->
            <path d="M15,32 L20,18 C22,18 26,24 24,30 Z" fill="#7f8c8d" />
            <path d="M85,32 L80,18 C78,18 74,24 76,30 Z" fill="#7f8c8d" />
            <!-- Head -->
            <ellipse cx="50" cy="52" rx="38" ry="32" fill="#95a5a6" />
            <!-- Eyes -->
            <ellipse cx="35" cy="48" rx="8" ry="10" fill="#fee440" />
            <ellipse cx="35" cy="48" rx="2" ry="7" fill="#000" />
            <circle cx="33" cy="44" r="2" fill="#fff" />
            <ellipse cx="65" cy="48" rx="8" ry="10" fill="#fee440" />
            <ellipse cx="65" cy="48" rx="2" ry="7" fill="#000" />
            <circle cx="63" cy="44" r="2" fill="#fff" />
            <!-- Nose & Mouth -->
            <polygon points="50,58 46,54 54,54" fill="#ff758c" />
            <path d="M46,62 Q50,65 50,62 Q50,65 54,62" stroke="#7f8c8d" stroke-width="1.5" fill="none" stroke-linecap="round" />
            <!-- Whiskers -->
            <line x1="18" y1="60" x2="2" y2="60" stroke="#7f8c8d" stroke-width="1.5" />
            <line x1="82" y1="60" x2="98" y2="60" stroke="#7f8c8d" stroke-width="1.5" />
        </svg>`
    },
    {
        id: 'bengal',
        name: 'Bengal Cat',
        svg: `<svg viewBox="0 0 100 100">
            <!-- Ears -->
            <polygon points="15,35 8,8 35,28" fill="#d35400" />
            <polygon points="20,32 14,14 32,27" fill="#ffb8b8" />
            <polygon points="85,35 92,8 65,28" fill="#d35400" />
            <polygon points="80,32 86,14 68,27" fill="#ffb8b8" />
            <!-- Head -->
            <ellipse cx="50" cy="52" rx="38" ry="32" fill="#e67e22" />
            <!-- Leopard Spots -->
            <circle cx="22" cy="40" r="3" fill="#2c3e50" />
            <ellipse cx="26" cy="62" rx="2.5" ry="3.5" fill="#2c3e50" />
            <circle cx="78" cy="40" r="3" fill="#2c3e50" />
            <ellipse cx="74" cy="62" rx="2.5" ry="3.5" fill="#2c3e50" />
            <path d="M48,22 Q50,27 48,32 M52,22 Q50,27 52,32" stroke="#2c3e50" stroke-width="2" fill="none"/>
            <!-- Eyes -->
            <ellipse cx="35" cy="48" rx="8" ry="10" fill="#26de81" />
            <ellipse cx="35" cy="48" rx="2" ry="7" fill="#000" />
            <circle cx="33" cy="44" r="2" fill="#fff" />
            <ellipse cx="65" cy="48" rx="8" ry="10" fill="#26de81" />
            <ellipse cx="65" cy="48" rx="2" ry="7" fill="#000" />
            <circle cx="63" cy="44" r="2" fill="#fff" />
            <!-- Nose & Mouth -->
            <polygon points="50,58 46,54 54,54" fill="#ff758c" />
            <path d="M46,62 Q50,65 50,62 Q50,65 54,62" stroke="#2c3e50" stroke-width="1.5" fill="none" stroke-linecap="round" />
            <!-- Whiskers -->
            <line x1="18" y1="60" x2="2" y2="60" stroke="#2c3e50" stroke-width="1.5" />
            <line x1="82" y1="60" x2="98" y2="60" stroke="#2c3e50" stroke-width="1.5" />
        </svg>`
    },
    {
        id: 'russianblue',
        name: 'Russian Blue',
        svg: `<svg viewBox="0 0 100 100">
            <!-- Ears -->
            <polygon points="15,35 8,8 35,28" fill="#3c414c" />
            <polygon points="20,32 14,14 32,27" fill="#e8a7a1" opacity="0.8"/>
            <polygon points="85,35 92,8 65,28" fill="#3c414c" />
            <polygon points="80,32 86,14 68,27" fill="#e8a7a1" opacity="0.8"/>
            <!-- Head (sleeker shape) -->
            <polygon points="20,40 50,22 80,40 76,70 50,82 24,70" fill="#4b5563" />
            <!-- Eyes (very vivid green) -->
            <ellipse cx="37" cy="46" rx="7" ry="9" fill="#00ff87" />
            <ellipse cx="37" cy="46" rx="1.5" ry="7" fill="#000" />
            <circle cx="35" cy="42" r="1.5" fill="#fff" />
            <ellipse cx="63" cy="46" rx="7" ry="9" fill="#00ff87" />
            <ellipse cx="63" cy="46" rx="1.5" ry="7" fill="#000" />
            <circle cx="61" cy="42" r="1.5" fill="#fff" />
            <!-- Nose & Mouth -->
            <polygon points="50,56 47,52 53,52" fill="#3c414c" />
            <path d="M46,60 Q50,63 50,60 Q50,63 54,60" stroke="#374151" stroke-width="1.5" fill="none" stroke-linecap="round" />
            <!-- Whiskers -->
            <line x1="18" y1="58" x2="2" y2="58" stroke="#374151" stroke-width="1" />
            <line x1="82" y1="58" x2="98" y2="58" stroke="#374151" stroke-width="1" />
        </svg>`
    },
    {
        id: 'lucky',
        name: 'Lucky Cat',
        svg: `<svg viewBox="0 0 100 100">
            <!-- Ears -->
            <polygon points="15,35 8,8 35,28" fill="#ffffff" stroke="#e1e8ed" />
            <polygon points="20,32 14,14 32,27" fill="#ff758c" />
            <polygon points="85,35 92,8 65,28" fill="#ffffff" stroke="#e1e8ed" />
            <polygon points="80,32 86,14 68,27" fill="#ff758c" />
            <!-- Head -->
            <ellipse cx="50" cy="52" rx="38" ry="32" fill="#ffffff" stroke="#e1e8ed" stroke-width="1" />
            <!-- Japanese Bib (Red & Gold Bell) -->
            <path d="M35,78 C35,85 65,85 65,78 Z" fill="#ff4d4d" />
            <circle cx="50" cy="80" r="5" fill="#fee440" />
            <line x1="45" y1="80" x2="55" y2="80" stroke="#2f3542" stroke-width="1" />
            <!-- Red Cheeks -->
            <circle cx="23" cy="56" r="4.5" fill="#ff4d4d" opacity="0.6" />
            <circle cx="77" cy="56" r="4.5" fill="#ff4d4d" opacity="0.6" />
            <!-- Eyes (Squinting/Smiling) -->
            <path d="M28,48 Q35,42 42,48" stroke="#2f3542" stroke-width="3" fill="none" stroke-linecap="round" />
            <path d="M58,48 Q65,42 72,48" stroke="#2f3542" stroke-width="3" fill="none" stroke-linecap="round" />
            <!-- Nose & Mouth -->
            <polygon points="50,56 47,53 53,53" fill="#ff758c" />
            <path d="M46,60 Q50,63 50,60 Q50,63 54,60" stroke="#2f3542" stroke-width="2" fill="none" stroke-linecap="round" />
        </svg>`
    },
    {
        id: 'sphinx',
        name: 'Sphynx Cat',
        svg: `<svg viewBox="0 0 100 100">
            <!-- Giant Ears -->
            <polygon points="12,38 0,4 30,26" fill="#f8a5c2" />
            <polygon points="16,35 6,12 27,26" fill="#ff758c" />
            <polygon points="88,38 100,4 70,26" fill="#f8a5c2" />
            <polygon points="84,35 94,12 73,26" fill="#ff758c" />
            <!-- Wrinkly Head -->
            <polygon points="24,42 50,24 76,42 72,72 50,84 28,72" fill="#f8a5c2" />
            <!-- Wrinkles -->
            <path d="M42,28 Q50,33 58,28 M44,34 Q50,38 56,34" stroke="#ff758c" stroke-width="1.5" fill="none" stroke-linecap="round" />
            <!-- Eyes (mysterious look) -->
            <polygon points="26,48 38,44 42,52 30,54" fill="#00f5d4" />
            <circle cx="34" cy="49" r="2.5" fill="#000" />
            <polygon points="74,48 62,44 58,52 70,54" fill="#00f5d4" />
            <circle cx="66" cy="49" r="2.5" fill="#000" />
            <!-- Nose & Mouth -->
            <polygon points="50,62 47,58 53,58" fill="#ff758c" />
            <path d="M46,66 Q50,69 50,66 Q50,69 54,66" stroke="#ff758c" stroke-width="1.5" fill="none" stroke-linecap="round" />
        </svg>`
    },
    {
        id: 'panther',
        name: 'Black Panther',
        svg: `<svg viewBox="0 0 100 100">
            <!-- Ears -->
            <polygon points="15,35 8,8 35,28" fill="#1e182a" />
            <polygon points="85,35 92,8 65,28" fill="#1e182a" />
            <!-- Head -->
            <ellipse cx="50" cy="52" rx="38" ry="32" fill="#120c1f" />
            <!-- Eyes (glowing gold) -->
            <polygon points="26,48 38,44 40,52 28,52" fill="#fee440" />
            <polygon points="74,48 62,44 60,52 72,52" fill="#fee440" />
            <!-- Fangs -->
            <polygon points="44,63 47,69 49,63" fill="#ffffff" />
            <polygon points="56,63 53,69 51,63" fill="#ffffff" />
            <!-- Nose & Mouth -->
            <polygon points="50,58 47,54 53,54" fill="#1e182a" />
            <path d="M46,62 Q50,65 50,62 Q50,65 54,62" stroke="#fee440" stroke-width="1" fill="none" stroke-linecap="round" />
            <!-- Whiskers -->
            <line x1="18" y1="60" x2="2" y2="60" stroke="#776c8c" stroke-width="1" />
            <line x1="82" y1="60" x2="98" y2="60" stroke="#776c8c" stroke-width="1" />
        </svg>`
    },
    {
        id: 'fantasy',
        name: 'Mystic Cat',
        svg: `<svg viewBox="0 0 100 100">
            <defs>
                <radialGradient id="grad-fantasy" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stop-color="#fd79a8" />
                    <stop offset="100%" stop-color="#e84393" />
                </radialGradient>
            </defs>
            <!-- Ears -->
            <polygon points="15,35 8,8 35,28" fill="#e84393" />
            <polygon points="85,35 92,8 65,28" fill="#e84393" />
            <!-- Head -->
            <ellipse cx="50" cy="52" rx="38" ry="32" fill="url(#grad-fantasy)" />
            <!-- Moon Symbol on Forehead -->
            <path d="M50,22 A4,4 0 1,1 50,30 A2.5,2.5 0 1,0 50,22 Z" fill="#fee440" transform="rotate(-20 50 26)" />
            <!-- Eyes (glowing purple) -->
            <ellipse cx="35" cy="48" rx="8" ry="10" fill="#a86ef7" />
            <ellipse cx="35" cy="48" rx="2" ry="7" fill="#fff" />
            <ellipse cx="65" cy="48" rx="8" ry="10" fill="#a86ef7" />
            <ellipse cx="65" cy="48" rx="2" ry="7" fill="#fff" />
            <!-- Nose & Mouth -->
            <polygon points="50,58 46,54 54,54" fill="#fee440" />
            <path d="M46,62 Q50,65 50,62 Q50,65 54,62" stroke="#fee440" stroke-width="1" fill="none" />
            <!-- Whiskers -->
            <line x1="18" y1="60" x2="2" y2="60" stroke="#f1f2f6" stroke-width="1" />
            <line x1="82" y1="60" x2="98" y2="60" stroke="#f1f2f6" stroke-width="1" />
        </svg>`
    }
];

// Paw Print pattern SVG for card backs
const PAW_PATTERN_SVG = `
<svg class="card-back-pattern" viewBox="0 0 100 100" fill="currentColor">
    <!-- Big central pad -->
    <path d="M50,45 C38,45 35,55 35,62 C35,72 42,75 50,75 C58,75 65,72 65,62 C65,55 62,45 50,45 Z" />
    <!-- 4 Toe pads -->
    <ellipse cx="28" cy="40" rx="7" ry="10" transform="rotate(-15 28 40)" />
    <ellipse cx="42" cy="30" rx="7" ry="10" transform="rotate(-5 42 30)" />
    <ellipse cx="58" cy="30" rx="7" ry="10" transform="rotate(5 58 30)" />
    <ellipse cx="72" cy="40" rx="7" ry="10" transform="rotate(15 72 40)" />
</svg>
`;

// Game State variables
let currentDifficulty = 'easy';
let cardsArray = [];
let flippedCards = [];
let matchedPairsCount = 0;
let totalPairsCount = 0;

let gameScore = 0;
let comboMultiplier = 1;
let bestComboThisGame = 1;
let totalMovesCount = 0;

let gameTimerInterval = null;
let timerStartTimestamp = 0;
let timerElapsedSeconds = 0;
let isGameActive = false;
let isBoardLocked = false;

// Audio synthesis settings
let audioCtx = null;
let isSoundEnabled = true;

// Confetti canvas state
const canvas = document.getElementById('confetti-canvas');
const ctx = canvas.getContext('2d');
let confettiParticles = [];
let confettiAnimationId = null;

// Initialize sound context
function initAudio() {
    if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
}

// Sound effects synthesizer
function playSynthSound(type) {
    if (!isSoundEnabled) return;
    initAudio();
    if (!audioCtx) return;
    
    if (audioCtx.state === 'suspended') {
        audioCtx.resume();
    }
    
    const now = audioCtx.currentTime;
    
    if (type === 'flip') {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(450, now);
        osc.frequency.exponentialRampToValueAtTime(150, now + 0.08);
        
        gain.gain.setValueAtTime(0.2, now);
        gain.gain.linearRampToValueAtTime(0.001, now + 0.08);
        
        osc.start(now);
        osc.stop(now + 0.08);
    } 
    else if (type === 'match') {
        const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
        const dur = 0.08;
        
        notes.forEach((freq, idx) => {
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();
            osc.connect(gain);
            gain.connect(audioCtx.destination);
            
            osc.type = 'sine';
            osc.frequency.setValueAtTime(freq, now + idx * dur);
            
            gain.gain.setValueAtTime(0, now + idx * dur);
            gain.gain.linearRampToValueAtTime(0.18, now + idx * dur + 0.02);
            gain.gain.exponentialRampToValueAtTime(0.001, now + idx * dur + 0.25);
            
            osc.start(now + idx * dur);
            osc.stop(now + idx * dur + 0.3);
        });
    } 
    else if (type === 'mismatch') {
        const osc1 = audioCtx.createOscillator();
        const osc2 = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        
        osc1.connect(gain);
        osc2.connect(gain);
        gain.connect(audioCtx.destination);
        
        osc1.type = 'triangle';
        osc2.type = 'sawtooth';
        
        // Dissonant sound ramping down
        osc1.frequency.setValueAtTime(180, now);
        osc1.frequency.linearRampToValueAtTime(100, now + 0.22);
        
        osc2.frequency.setValueAtTime(185, now);
        osc2.frequency.linearRampToValueAtTime(102, now + 0.22);
        
        gain.gain.setValueAtTime(0.25, now);
        gain.gain.linearRampToValueAtTime(0.001, now + 0.22);
        
        osc1.start(now);
        osc2.start(now);
        osc1.stop(now + 0.22);
        osc2.stop(now + 0.22);
    } 
    else if (type === 'win') {
        // Triumphant cute melody
        const melody = [
            { f: 523.25, d: 0.1 },  // C5
            { f: 659.25, d: 0.1 },  // E5
            { f: 783.99, d: 0.1 },  // G5
            { f: 659.25, d: 0.08 }, // E5
            { f: 783.99, d: 0.08 }, // G5
            { f: 1046.50, d: 0.15 },// C6
            { f: 1318.51, d: 0.3 }  // E6
        ];
        
        let accumTime = 0;
        melody.forEach((note) => {
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();
            osc.connect(gain);
            gain.connect(audioCtx.destination);
            
            osc.type = 'sine';
            osc.frequency.setValueAtTime(note.f, now + accumTime);
            
            gain.gain.setValueAtTime(0, now + accumTime);
            gain.gain.linearRampToValueAtTime(0.2, now + accumTime + 0.02);
            gain.gain.exponentialRampToValueAtTime(0.001, now + accumTime + note.d);
            
            osc.start(now + accumTime);
            osc.stop(now + accumTime + note.d + 0.1);
            
            accumTime += note.d * 0.8;
        });
    } 
    else if (type === 'click') {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        
        osc.type = 'sine';
        osc.frequency.setValueAtTime(500, now);
        
        gain.gain.setValueAtTime(0.08, now);
        gain.gain.linearRampToValueAtTime(0.001, now + 0.02);
        
        osc.start(now);
        osc.stop(now + 0.02);
    }
}

// Particle class for Confetti Canvas
class ConfettiParticle {
    constructor(x, y, isSpread = false) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 8 + 6;
        
        // Soft pastel cozy colors
        const colors = ['#9b5de5', '#f15bb5', '#fee440', '#00f5d4', '#00bbf9', '#ff9f43', '#10ac84'];
        this.color = colors[Math.floor(Math.random() * colors.length)];
        
        if (isSpread) {
            const angle = Math.random() * Math.PI * 2;
            const speed = Math.random() * 4.5 + 2;
            this.vx = Math.cos(angle) * speed;
            this.vy = Math.sin(angle) * speed - 1.5;
        } else {
            this.vx = Math.random() * 4 - 2;
            this.vy = Math.random() * 6 + 3;
        }
        
        this.gravity = 0.12;
        this.rotation = Math.random() * Math.PI * 2;
        this.rotationSpeed = Math.random() * 0.2 - 0.1;
        this.opacity = 1;
        this.decay = Math.random() * 0.015 + 0.01;
    }
    
    update() {
        this.x += this.vx;
        this.y += this.vy;
        this.vy += this.gravity;
        this.rotation += this.rotationSpeed;
        this.opacity -= this.decay;
    }
    
    draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        ctx.fillStyle = this.color;
        ctx.globalAlpha = this.opacity;
        ctx.fillRect(-this.size / 2, -this.size / 2, this.size, this.size);
        ctx.restore();
    }
}

// Confetti Loop
function startConfetti() {
    if (confettiAnimationId) cancelAnimationFrame(confettiAnimationId);
    
    function updateLoop() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Spawn more if modal is visible
        const modal = document.getElementById('win-modal');
        if (!modal.classList.contains('hidden') && confettiParticles.length < 180) {
            confettiParticles.push(new ConfettiParticle(Math.random() * canvas.width, -10));
        }
        
        for (let i = confettiParticles.length - 1; i >= 0; i--) {
            const p = confettiParticles[i];
            p.update();
            p.draw();
            if (p.opacity <= 0 || p.y > canvas.height) {
                confettiParticles.splice(i, 1);
            }
        }
        
        if (confettiParticles.length > 0) {
            confettiAnimationId = requestAnimationFrame(updateLoop);
        } else {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            confettiAnimationId = null;
        }
    }
    
    updateLoop();
}

// Spark a burst of confetti upon card match
function triggerMatchBurst(cardEl) {
    const rect = cardEl.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    
    for (let i = 0; i < 12; i++) {
        confettiParticles.push(new ConfettiParticle(x, y, true));
    }
    
    if (!confettiAnimationId) {
        startConfetti();
    }
}

// Resize Confetti Canvas to occupy full window
function handleResize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
window.addEventListener('resize', handleResize);
handleResize();

// Game configuration settings by difficulty
const DIFFICULTY_CONFIGS = {
    easy: { cols: 4, rows: 3, pairs: 6 },
    medium: { cols: 4, rows: 4, pairs: 8 },
    hard: { cols: 6, rows: 5, pairs: 15 }
};

// Shuffles an array in place (Fisher-Yates algorithm)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Format seconds into MM:SS
function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

// Timer management
function startTimer() {
    stopTimer();
    timerStartTimestamp = Date.now();
    timerElapsedSeconds = 0;
    document.getElementById('timer-val').textContent = '00:00';
    
    gameTimerInterval = setInterval(() => {
        timerElapsedSeconds = Math.floor((Date.now() - timerStartTimestamp) / 1000);
        document.getElementById('timer-val').textContent = formatTime(timerElapsedSeconds);
    }, 1000);
}

function stopTimer() {
    if (gameTimerInterval) {
        clearInterval(gameTimerInterval);
        gameTimerInterval = null;
    }
}

// High score loading & rendering
function updateHighScoreDisplay() {
    const key = `pexeso_highscore_${currentDifficulty}`;
    const highscore = localStorage.getItem(key) || 0;
    document.getElementById('highscore-val').textContent = highscore;
}

// Setup a new game
function initNewGame() {
    stopTimer();
    isGameActive = false;
    isBoardLocked = false;
    flippedCards = [];
    matchedPairsCount = 0;
    gameScore = 0;
    comboMultiplier = 1;
    bestComboThisGame = 1;
    totalMovesCount = 0;
    
    // Reset stats ui
    document.getElementById('score-val').textContent = '0';
    document.getElementById('moves-val').textContent = '0';
    document.getElementById('timer-val').textContent = '00:00';
    updateComboUI();
    
    // Read config
    const config = DIFFICULTY_CONFIGS[currentDifficulty];
    totalPairsCount = config.pairs;
    document.getElementById('pairs-val').textContent = `0 / ${totalPairsCount}`;
    updateHighScoreDisplay();
    
    // Pick the required number of cat templates
    const selectedCats = CAT_TEMPLATES.slice(0, totalPairsCount);
    
    // Double them up to make pairs
    const gameDeck = [];
    selectedCats.forEach(cat => {
        gameDeck.push({ ...cat, uniqueId: `${cat.id}-a` });
        gameDeck.push({ ...cat, uniqueId: `${cat.id}-b` });
    });
    
    // Shuffle the deck
    shuffleArray(gameDeck);
    
    // Render Board
    const boardEl = document.getElementById('game-board');
    boardEl.innerHTML = '';
    
    // Clean old difficulty classes and assign the right class
    boardEl.className = `game-board ${currentDifficulty}`;
    
    // Generate cards inside grid
    gameDeck.forEach((cardData, idx) => {
        const cardContainer = document.createElement('div');
        cardContainer.className = 'card';
        cardContainer.dataset.catId = cardData.id;
        cardContainer.dataset.uniqueId = cardData.uniqueId;
        
        cardContainer.innerHTML = `
            <div class="card-inner">
                <div class="card-back">
                    ${PAW_PATTERN_SVG}
                </div>
                <div class="card-front">
                    <div class="card-svg-container">
                        ${cardData.svg}
                    </div>
                    <span class="card-name">${cardData.name}</span>
                </div>
            </div>
        `;
        
        cardContainer.addEventListener('click', () => handleCardClick(cardContainer));
        boardEl.appendChild(cardContainer);
    });
    
    // Play sound
    playSynthSound('win'); // soft chime sweep
    
    // Close modal if open
    document.getElementById('win-modal').classList.add('hidden');
}

// Handle clicking a card
function handleCardClick(cardEl) {
    // Prevent actions if board is locked or card is already shown
    if (isBoardLocked) return;
    if (cardEl.classList.contains('flipped') || cardEl.classList.contains('matched')) return;
    
    // Start timer on first card click
    if (!isGameActive) {
        isGameActive = true;
        startTimer();
    }
    
    // Play flip audio
    playSynthSound('flip');
    
    // Flip card visually
    cardEl.classList.add('flipped');
    flippedCards.push(cardEl);
    
    // Compare if two cards are flipped
    if (flippedCards.length === 2) {
        totalMovesCount++;
        document.getElementById('moves-val').textContent = totalMovesCount;
        
        isBoardLocked = true;
        checkMatch();
    }
}

// Updates the Combo display
function updateComboUI() {
    const badge = document.getElementById('combo-badge');
    if (comboMultiplier > 1) {
        badge.textContent = `x${comboMultiplier} Combo`;
        badge.classList.remove('hidden');
    } else {
        badge.classList.add('hidden');
    }
}

// Card matching logic
function checkMatch() {
    const [card1, card2] = flippedCards;
    const id1 = card1.dataset.catId;
    const id2 = card2.dataset.catId;
    
    if (id1 === id2) {
        // Success Match!
        setTimeout(() => {
            card1.classList.add('matched');
            card2.classList.add('matched');
            
            // Add points with multiplier
            const pointsAdded = 100 * comboMultiplier;
            gameScore += pointsAdded;
            document.getElementById('score-val').textContent = gameScore;
            
            // Spark effects
            triggerMatchBurst(card1);
            triggerMatchBurst(card2);
            
            // Audio chimes
            playSynthSound('match');
            
            // Stats increments
            matchedPairsCount++;
            document.getElementById('pairs-val').textContent = `${matchedPairsCount} / ${totalPairsCount}`;
            
            // Combo increment
            if (comboMultiplier > bestComboThisGame) {
                bestComboThisGame = comboMultiplier;
            }
            comboMultiplier++;
            updateComboUI();
            
            // Reset flipped cards & unlock board
            flippedCards = [];
            isBoardLocked = false;
            
            // Victory conditions
            if (matchedPairsCount === totalPairsCount) {
                handleVictory();
            }
        }, 350);
    } else {
        // Fail mismatch!
        setTimeout(() => {
            card1.classList.add('shake');
            card2.classList.add('shake');
            
            playSynthSound('mismatch');
            
            // Penalty points
            gameScore = Math.max(0, gameScore - 15);
            document.getElementById('score-val').textContent = gameScore;
            
            // Reset combo multiplier
            comboMultiplier = 1;
            updateComboUI();
            
            setTimeout(() => {
                card1.classList.remove('flipped', 'shake');
                card2.classList.remove('flipped', 'shake');
                
                flippedCards = [];
                isBoardLocked = false;
            }, 600); // Wait for shake animation to finish
        }, 500);
    }
}

// Victory screen setup and trigger
function handleVictory() {
    stopTimer();
    isGameActive = false;
    
    // Play victory song
    setTimeout(() => {
        playSynthSound('win');
    }, 200);
    
    // Particle explosion
    for (let i = 0; i < 80; i++) {
        confettiParticles.push(new ConfettiParticle(Math.random() * canvas.width, Math.random() * canvas.height - 100));
    }
    startConfetti();
    
    // Check for highscore updates
    const hsKey = `pexeso_highscore_${currentDifficulty}`;
    const oldHs = parseInt(localStorage.getItem(hsKey) || '0', 10);
    let isNewRecord = false;
    
    if (gameScore > oldHs) {
        localStorage.setItem(hsKey, gameScore);
        isNewRecord = true;
        updateHighScoreDisplay();
    }
    
    // Populate stats popup
    document.getElementById('modal-score').textContent = gameScore;
    document.getElementById('modal-time').textContent = formatTime(timerElapsedSeconds);
    document.getElementById('modal-moves').textContent = totalMovesCount;
    document.getElementById('modal-combo').textContent = `x${bestComboThisGame}`;
    
    const recordBanner = document.getElementById('new-record-banner');
    if (isNewRecord) {
        recordBanner.classList.remove('hidden');
    } else {
        recordBanner.classList.add('hidden');
    }
    
    // Open modal
    setTimeout(() => {
        document.getElementById('win-modal').classList.remove('hidden');
    }, 700);
}

// Event Listeners for UI interaction
document.addEventListener('DOMContentLoaded', () => {
    // Setup initial game
    initNewGame();
    
    // Difficulty toggle
    const diffButtons = document.querySelectorAll('.diff-btn');
    diffButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            playSynthSound('click');
            diffButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            currentDifficulty = btn.dataset.difficulty;
            initNewGame();
        });
    });
    
    // Restart action
    document.getElementById('restart-btn').addEventListener('click', () => {
        playSynthSound('click');
        initNewGame();
    });
    
    // Mute/Unmute toggle
    const soundBtn = document.getElementById('sound-btn');
    soundBtn.addEventListener('click', () => {
        isSoundEnabled = !isSoundEnabled;
        const iconSpan = soundBtn.querySelector('.btn-icon');
        
        if (isSoundEnabled) {
            iconSpan.textContent = '🔊';
            soundBtn.title = 'Mute Sound';
            playSynthSound('click');
        } else {
            iconSpan.textContent = '🔇';
            soundBtn.title = 'Unmute Sound';
        }
    });
    
    // Play again modal trigger
    document.getElementById('modal-play-again').addEventListener('click', () => {
        playSynthSound('click');
        initNewGame();
    });
    
    // Interactive mouse listeners to resume audio context if blocked
    document.body.addEventListener('click', () => {
        initAudio();
    }, { once: true });
});
