// Centralized SVG Icon components — exact paths from reference HTML

export const StarIcon = ({ size = 12, style }) => (
  <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false"
    style={{ display: 'block', width: size, height: size, fill: 'currentColor', ...style }}>
    <path fillRule="evenodd" d="m15.1 1.58-4.13 8.88-9.86 1.27a1 1 0 0 0-.54 1.74l7.3 6.57-1.97 9.85a1 1 0 0 0 1.48 1.06l8.62-5 8.63 5a1 1 0 0 0 1.48-1.06l-1.97-9.85 7.3-6.57a1 1 0 0 0-.55-1.73l-9.86-1.28-4.12-8.88a1 1 0 0 0-1.82 0z"/>
  </svg>
);

export const AirbnbLogo = () => (
  <svg viewBox="0 0 3490 1080" style={{ display: 'block', height: '32px', width: 'auto', fill: 'currentColor' }}>
    <path d="M1494.71 456.953C1458.28 412.178 1408.46 389.892 1349.68 389.892C1233.51 389.892 1146.18 481.906 1146.18 605.892C1146.18 729.877 1233.51 821.892 1349.68 821.892C1408.46 821.892 1458.28 799.605 1494.71 754.83L1500.95 810.195H1589.84V401.588H1500.95L1494.71 456.953ZM1369.18 736.895C1295.33 736.895 1242.08 683.41 1242.08 605.892C1242.08 528.373 1295.33 474.888 1369.18 474.888C1443.02 474.888 1495.49 529.153 1495.49 605.892C1495.49 682.63 1443.8 736.895 1369.18 736.895ZM1656.11 810.195H1750.46V401.588H1656.11V810.195ZM948.912 666.715C875.618 506.859 795.308 344.664 713.438 184.809C698.623 155.177 670.554 98.2527 645.603 67.8412C609.736 24.1733 556.715 0.779785 502.915 0.779785C449.115 0.779785 396.094 24.1733 360.227 67.8412C335.277 98.2527 307.207 155.177 292.392 184.809C210.522 344.664 130.212 506.859 56.9187 666.715C47.5621 687.769 24.9504 737.675 16.3736 760.289C6.2373 787.581 0.779297 817.213 0.779297 846.845C0.779297 975.509 101.362 1079.22 235.473 1079.22C346.193 1079.22 434.3 1008.26 502.915 934.18C571.53 1008.26 659.638 1079.22 770.357 1079.22C904.468 1079.22 1005.83 975.509 1005.83 846.845C1005.83 817.213 999.593 787.581 989.457 760.289C980.88 737.675 958.268 687.769 948.912 666.715ZM502.915 810.195C447.555 738.455 396.094 649.56 396.094 577.819C396.094 506.079 446.776 470.209 502.915 470.209C559.055 470.209 610.516 508.419 610.516 577.819C610.516 647.22 558.275 738.455 502.915 810.195ZM770.357 998.902C688.362 998.902 618.032 941.557 555.741 872.656C619.966 792.541 690.826 679.121 690.826 577.819C690.826 458.513 598.04 389.892 502.915 389.892C407.79 389.892 315.784 458.513 315.784 577.819C315.784 679.098 386.145 792.478 450.144 872.593C387.845 941.526 317.491 998.902 235.473 998.902C146.586 998.902 81.0898 931.061 81.0898 846.845C81.0898 826.57 84.2087 807.856 91.2261 788.361C98.2436 770.426 120.855 720.52 130.212 701.025C203.505 541.17 282.256 380.534 364.126 220.679C378.941 191.047 403.891 141.921 422.605 119.307C442.877 94.3538 470.947 81.0975 502.915 81.0975C534.883 81.0975 562.953 94.3538 583.226 119.307C601.939 141.921 626.89 191.047 641.704 220.679C723.574 380.534 802.325 541.17 875.618 701.025C884.975 720.52 907.587 770.426 914.604 788.361C921.622 807.856 925.52 826.57 925.52 846.845C925.52 931.061 859.244 998.902 770.357 998.902ZM3285.71 389.892C3226.91 389.892 3175.97 413.098 3139.91 456.953V226.917H3045.56V810.195H3134.45L3140.69 754.83C3177.12 799.605 3226.94 821.892 3285.71 821.892C3401.89 821.892 3489.22 729.877 3489.22 605.892C3489.22 481.906 3401.89 389.892 3285.71 389.892ZM3266.22 736.895C3191.6 736.895 3139.91 682.63 3139.91 605.892C3139.91 529.153 3191.6 474.888 3266.22 474.888C3340.85 474.888 3393.32 528.373 3393.32 605.892C3393.32 683.41 3340.07 736.895 3266.22 736.895ZM2827.24 389.892C2766.15 389.892 2723.56 418.182 2699.37 456.953L2693.13 401.588H2604.24V810.195H2698.59V573.921C2698.59 516.217 2741.47 474.888 2800.73 474.888C2856.87 474.888 2888.84 513.097 2888.84 578.599V810.195H2983.19V566.903C2983.19 457.733 2923.15 389.892 2827.24 389.892ZM1911.86 460.072L1905.62 401.588H1816.73V810.195H1911.08V604.332C1911.08 532.592 1954.74 486.585 2027.26 486.585C2042.85 486.585 2058.44 488.144 2070.92 492.043V401.588C2059.22 396.91 2044.41 395.35 2028.04 395.35C1978.58 395.35 1936.66 421.177 1911.86 460.072ZM2353.96 389.892C2295.15 389.892 2244.21 413.098 2208.15 456.953V226.917H2113.8V810.195H2202.69L2208.93 754.83C2245.36 799.605 2295.18 821.892 2353.96 821.892C2470.13 821.892 2557.46 729.877 2557.46 605.892C2557.46 481.906 2470.13 389.892 2353.96 389.892ZM2334.46 736.895C2259.84 736.895 2208.15 682.63 2208.15 605.892C2208.15 529.153 2259.84 474.888 2334.46 474.888C2409.09 474.888 2461.56 528.373 2461.56 605.892C2461.56 683.41 2408.31 736.895 2334.46 736.895ZM1703.28 226.917C1669.48 226.917 1642.08 254.326 1642.08 288.13C1642.08 321.934 1669.48 349.343 1703.28 349.343C1737.09 349.343 1764.49 321.934 1764.49 288.13C1764.49 254.326 1737.09 226.917 1703.28 226.917Z"/>
  </svg>
);

export const GlobeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" aria-hidden="true" focusable="false"
    style={{ display: 'block', height: '100%', width: '100%', fill: 'currentColor' }}>
    <path d="M8 .25a7.77 7.77 0 0 1 7.75 7.78 7.75 7.75 0 0 1-7.52 7.72h-.25A7.75 7.75 0 0 1 .25 8.24v-.25A7.75 7.75 0 0 1 8 .25zm1.95 8.5h-3.9c.15 2.9 1.17 5.34 1.88 5.5H8c.68 0 1.72-2.37 1.93-5.23zm4.26 0h-2.76c-.09 1.96-.53 3.78-1.18 5.08A6.26 6.26 0 0 0 14.17 9zm-9.67 0H1.8a6.26 6.26 0 0 0 3.94 5.08 12.59 12.59 0 0 1-1.16-4.7l-.03-.38zm1.2-6.58-.12.05a6.26 6.26 0 0 0-3.83 5.03h2.75c.09-1.83.48-3.54 1.06-4.81zm2.25-.42c-.7 0-1.78 2.51-1.94 5.5h3.9c-.15-2.9-1.18-5.34-1.89-5.5h-.07zm2.28.43.03.05a12.95 12.95 0 0 1 1.15 5.02h2.75a6.28 6.28 0 0 0-3.93-5.07z"/>
  </svg>
);

export const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" focusable="false"
    style={{ display: 'block', height: '100%', width: '100%', fill: 'none', stroke: 'currentColor', strokeWidth: 3, overflow: 'visible' }}>
    <g fill="none"><path d="M2 16h28M2 24h28M2 8h28"/></g>
  </svg>
);

export const SearchIcon = () => (
  <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false"
    style={{ display: 'block', height: '100%', width: '100%', fill: 'currentColor' }}>
    <path d="M13 0C5.82 0 0 5.82 0 13s5.82 13 13 13c3.09 0 5.93-1.08 8.16-2.87l7.85 7.85 2.83-2.83-7.85-7.85A12.94 12.94 0 0 0 26 13C26 5.82 20.18 0 13 0zm0 2a11 11 0 1 1 0 22A11 11 0 0 1 13 2z"/>
  </svg>
);

export const ShareIcon = () => (
  <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"
    style={{ display: 'block', height: '100%', width: '100%', fill: 'none', stroke: 'currentColor', strokeWidth: 2, overflow: 'visible' }}>
    <path d="m27 18v9c0 1.1046-.8954 2-2 2h-18c-1.10457 0-2-.8954-2-2v-9m11-15v21m-10-11 9.2929-9.29289c.3905-.39053 1.0237-.39053 1.4142 0l9.2929 9.29289" fill="none"/>
  </svg>
);

export const HeartIcon = ({ filled = false }) => (
  <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"
    style={{ display: 'block', height: '100%', width: '100%', fill: filled ? '#FF385C' : 'none', stroke: filled ? '#FF385C' : 'currentColor', strokeWidth: 2, overflow: 'visible', transition: 'all 0.2s ease' }}>
    <path d="m15.9998 28.6668c7.1667-4.8847 14.3334-10.8844 14.3334-18.1088 0-1.84951-.6993-3.69794-2.0988-5.10877-1.3996-1.4098-3.2332-2.11573-5.0679-2.11573-1.8336 0-3.6683.70593-5.0668 2.11573l-2.0999 2.11677-2.0988-2.11677c-1.3995-1.4098-3.2332-2.11573-5.06783-2.11573-1.83364 0-3.66831.70593-5.06683 2.11573-1.39955 1.41083-2.09984 3.25926-2.09984 5.10877 0 7.2244 7.16667 13.2241 14.3333 18.1088z"/>
  </svg>
);

export const ChevronRightIcon = () => (
  <svg viewBox="0 0 18 18" aria-hidden="true" focusable="false"
    style={{ display: 'block', height: '100%', width: '100%', fill: 'currentColor' }}>
    <path d="m4.29 1.71a1 1 0 1 1 1.42-1.41l8 8a1 1 0 0 1 0 1.41l-8 8a1 1 0 1 1 -1.42-1.41l7.29-7.29z" fillRule="evenodd"/>
  </svg>
);

export const ChevronLeftIcon = () => (
  <svg viewBox="0 0 18 18" aria-hidden="true" focusable="false"
    style={{ display: 'block', height: '100%', width: '100%', fill: 'currentColor' }}>
    <path d="m13.7 16.29a1 1 0 1 1 -1.42 1.41l-8-8a1 1 0 0 1 0-1.41l8-8a1 1 0 1 1 1.42 1.41l-7.29 7.29z" fillRule="evenodd"/>
  </svg>
);

export const GridIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" aria-hidden="true" focusable="false"
    style={{ display: 'block', height: '100%', width: '100%', fill: 'currentColor' }}>
    <path fillRule="evenodd" d="M3 11.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm-10-5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm-10-5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z"/>
  </svg>
);

export const CloseIcon = () => (
  <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false"
    style={{ display: 'block', height: '100%', width: '100%', fill: 'none', stroke: 'currentColor', strokeWidth: 2, overflow: 'visible' }}>
    <path d="M6 6l20 20M26 6 6 26" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const BackArrowIcon = () => (
  <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false"
    style={{ display: 'block', height: '100%', width: '100%', fill: 'none', stroke: 'currentColor', strokeWidth: 2, overflow: 'visible' }}>
    <path d="M20 28 8.7 16.7a1 1 0 0 1 0-1.4L20 4" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const PrevLargeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" focusable="false"
    style={{ display: 'block', height: '100%', width: '100%', fill: 'none', stroke: 'currentColor', strokeWidth: 4, overflow: 'visible' }}>
    <path fill="none" d="M20 28 8.7 16.7a1 1 0 0 1 0-1.4L20 4"/>
  </svg>
);

export const NextLargeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" focusable="false"
    style={{ display: 'block', height: '100%', width: '100%', fill: 'none', stroke: 'currentColor', strokeWidth: 4, overflow: 'visible' }}>
    <path fill="none" d="m12 4 11.3 11.3a1 1 0 0 1 0 1.4L12 28"/>
  </svg>
);

export const ChevronDownIcon = () => (
  <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false"
    style={{ display: 'block', height: '100%', width: '100%', fill: 'none', stroke: 'currentColor', strokeWidth: 2, overflow: 'visible' }}>
    <path d="M4 10l12 12 12-12" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const FlagIcon = () => (
  <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"
    style={{ display: 'block', height: '100%', width: '100%', fill: 'currentColor' }}>
    <path d="m7.5011 1c.5272 0 .9591.40794.99725.92537l.00275.07463v1h5.5c.31265 0 .5435.281645.4935.581075l-.01275.056285-.96125 3.36264.96125 3.36265c.08055.2818-.0967.5625-.36775.62465l-.0554.00945-.0576.00325h-5.5c-.5272 0-.9591-.40795-.99725-.92535l-.00275-.07465v-1h-5v6h-1v-14zm1 3h-1v4h1z"/>
  </svg>
);

export const VerifiedIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" focusable="false"
    style={{ display: 'block', height: '100%', width: '100%', fill: 'currentColor' }}>
    <path d="M16 1a15 15 0 1 1 0 30 15 15 0 0 1 0-30zm0 2a13 13 0 1 0 0 26 13 13 0 0 0 0-26zm7 7.59L24.41 12 13.5 22.91 7.59 17 9 15.59l4.5 4.5z"/>
  </svg>
);

export const ShieldIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" focusable="false"
    style={{ display: 'block', height: '100%', width: '100%', fill: 'currentColor' }}>
    <path d="m16 .8.56.37C20.4 3.73 24.2 5 28 5h1v12.5C29 25.57 23.21 31 16 31S3 25.57 3 17.5V5h1c3.8 0 7.6-1.27 11.45-3.83L16 .8zm-1 3a22.2 22.2 0 0 1-9.65 3.15L5 6.97V17.5c0 6.56 4.35 11 10 11.46zm2 0v25.16c5.65-.47 10-4.9 10-11.46V6.97l-.35-.02A22.2 22.2 0 0 1 17 3.8z"/>
  </svg>
);
