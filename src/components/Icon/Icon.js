import images from '~/assets/images';
import Image from '~/components/Image';

export const Magnifier = ({ className, width, height }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        width={width}
        height={height}
        viewBox="0 0 25 21"
        fill="none"
    >
        <path
            d="M17.0448 8.9657C17.0448 13.3619 13.4682 16.9314 9.04915 16.9314C4.63011 16.9314 1.05347 13.3619 1.05347 8.9657C1.05347 4.56951 4.63011 1 9.04915 1C13.4682 1 17.0448 4.56951 17.0448 8.9657Z"
            fill="none"
            stroke="white"
            strokeWidth="2"
        />
        <path d="M15.8401 14.3477L23.2413 20" stroke="white" strokeWidth="2" strokeLinecap="round" />
    </svg>
);

export const UploadIcon = ({ className, width, height }) => (
    <svg
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        version="1.0"
        width={width}
        height={height}
        viewBox="0 0 2176.000000 2067.000000"
        preserveAspectRatio="xMidYMid meet"
    >
        <g transform="translate(0.000000,2067.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
            <path d="M3190 20659 c-696 -33 -1392 -296 -1945 -735 -145 -116 -418 -390 -529 -534 -271 -349 -455 -712 -575 -1128 -80 -279 -116 -506 -132 -837 -15 -309 -6 -12032 9 -12175 32 -292 73 -491 153 -737 280 -868 909 -1591 1720 -1977 342 -163 713 -268 1109 -313 147 -17 411 -18 4855 -18 l4700 0 80 28 c333 117 476 465 323 786 -65 137 -210 246 -383 288 -65 16 -380 18 -4760 23 -3520 5 -4706 10 -4755 18 -278 50 -434 94 -616 172 -420 180 -767 479 -995 857 -124 205 -225 460 -272 688 -55 264 -52 -150 -52 6365 0 5586 1 6054 17 6160 114 791 524 1377 1193 1706 222 109 434 174 720 222 92 15 559 17 6155 20 4297 2 6083 0 6150 -8 241 -27 509 -108 745 -224 454 -223 787 -557 1004 -1007 104 -215 158 -382 204 -634 l22 -120 5 -3205 5 -3205 22 -76 c34 -120 77 -195 157 -274 106 -105 227 -155 378 -155 239 0 432 137 520 372 l32 83 7 360 c10 516 9 5046 -1 5635 -6 338 -14 536 -24 625 -115 948 -572 1744 -1323 2302 -517 384 -1151 610 -1833 653 -192 12 -11840 11 -12090 -1z" />
            <path d="M11925 16539 c-2081 -469 -4352 -979 -5538 -1244 -384 -86 -722 -165 -751 -176 -60 -22 -87 -47 -113 -104 -17 -38 -18 -175 -14 -3057 l4 -3017 -244 6 c-271 7 -408 -3 -609 -43 -514 -102 -993 -402 -1244 -779 -155 -232 -226 -460 -226 -726 0 -449 233 -851 663 -1147 529 -364 1141 -477 1810 -336 349 74 657 206 883 379 40 31 112 98 161 149 231 242 350 510 415 941 9 61 13 760 15 2882 3 2636 5 2802 21 2807 9 3 1180 266 2602 586 1422 319 2593 583 2603 586 16 5 17 -94 17 -1995 l0 -2000 -272 1 c-287 0 -408 -10 -608 -53 -563 -122 -1069 -486 -1290 -928 -89 -180 -130 -356 -130 -566 0 -263 70 -489 221 -715 244 -365 753 -685 1251 -784 191 -39 322 -49 523 -43 337 11 666 82 964 208 371 157 639 400 796 724 80 164 123 306 162 535 17 100 18 321 20 4233 l3 4127 -52 -1 c-31 0 -878 -187 -2043 -450z" />
            <path d="M17770 9037 c-134 -46 -216 -111 -397 -317 -382 -434 -2557 -2922 -2861 -3273 -200 -230 -374 -437 -388 -459 -38 -60 -74 -163 -74 -211 0 -35 6 -49 32 -76 41 -42 111 -77 206 -104 76 -21 94 -21 1075 -25 l997 -3 0 -1947 c0 -1300 3 -1976 11 -2032 39 -317 175 -487 449 -562 l85 -23 1005 0 1005 0 90 28 c124 39 179 71 255 147 75 75 118 155 152 281 l23 84 2 2015 3 2015 633 -3 c347 -2 812 1 1032 6 395 9 401 9 483 36 61 20 93 37 123 66 l42 39 -5 71 c-4 57 -14 88 -46 153 -36 71 -99 149 -488 597 -1336 1537 -2886 3301 -2959 3368 -150 137 -325 184 -485 129z" />
        </g>
    </svg>
);
export const SignOutIcon = ({ className, width, height }) => (
    <svg
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 18 18"
        fill="none"
    >
        <g>
            <path
                id="Vector"
                d="M12.0535 2.36526V4.44989L13.3898 3.12695V0.668151L12.7216 0H0.694877L0.026726 0.668151V1.31759L0 1.3363V15.0869L0.481069 15.7016L7.16258 18L8.01782 17.3719V16.0356H12.7216L13.3898 15.3675V12.9488L12.0535 11.6125V14.6993H8.01782V3.62138L7.57684 3.00668L2.72071 1.3363H12.0535V2.36526ZM6.68151 16.4098L1.3363 14.6192V2.29844L6.68151 4.08909V16.4098ZM15.3942 8.65924H8.75278V7.32294H15.3408L13.2027 5.18486L14.1514 4.24944L17.4521 7.53675V8.48552L14.1247 11.7996L13.1893 10.8641L15.3942 8.65924Z"
                fill="black"
            />
        </g>
    </svg>
);
export const PlusIcon = ({ className, width, height, stroke = 'black' }) => (
    <svg
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 20 20"
        fill="none"
    >
        <line x1="9.72865" y1="2" x2="9.72865" y2="17.8378" stroke={stroke} strokeWidth="4" strokeLinecap="round" />
        <line x1="2" y1="10" x2="17.8378" y2="10" stroke={stroke} strokeWidth="4" strokeLinecap="round" />
    </svg>
);

export const ArrowIcon = ({ className, width, height }) => (
    <svg
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 10 13"
        fill="none"
    >
        <path d="M9.63948 6.5L0.893775 12.1292L0.893776 0.870834L9.63948 6.5Z" fill="#F88989" />
    </svg>
);
export const DoubleArrowIcon = ({ className, width, height }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        width={width}
        height={height}
        viewBox="0 0 13 10"
        fill="none"
    >
        <path
            d="M12.7086 4.35954L7.83339 0.193971C7.31032 -0.253828 6.50032 0.121073 6.50032 0.834428L6.50032 9.16557C6.50032 9.87893 7.31032 10.2538 7.83339 9.80603L12.7086 5.64046C13.0971 5.30721 13.0971 4.69279 12.7086 4.35954ZM6.20831 4.35954L1.33307 0.193971C0.81 -0.253828 -4.15452e-07 0.121074 -3.53088e-07 0.834428L3.75244e-07 9.16557C4.37607e-07 9.87893 0.810001 10.2538 1.33307 9.80603L6.20831 5.64046C6.59681 5.30721 6.59681 4.69279 6.20831 4.35954Z"
            fill="#58EB00"
            fillOpacity="0.85"
        />
    </svg>
);

export const PlayIcon = ({ className, width, height }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        width={width}
        height={height}
        viewBox="0 0 12 13"
        fill="none"
    >
        <path
            d="M0.681574 1.61226C0.693773 0.853396 1.50416 0.378033 2.16169 0.744052L10.5815 5.43105C11.2574 5.8073 11.2647 6.78506 10.5947 7.17813L2.01865 12.2087C1.34855 12.6017 0.512826 12.1099 0.525366 11.3298L0.681574 1.61226Z"
            fill="#F88989"
        />
    </svg>
);
export const PauseIcon = ({ className, width, height }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        width={width}
        height={height}
        viewBox="0 0 9 11"
        fill="none"
    >
        <path
            d="M2.16469 0H1.08234C0.795288 0 0.51999 0.114032 0.317011 0.317011C0.114033 0.51999 0 0.795288 0 1.08234V9.74109C0 10.0281 0.114033 10.3034 0.317011 10.5064C0.51999 10.7094 0.795288 10.8234 1.08234 10.8234H2.16469C2.45174 10.8234 2.72704 10.7094 2.93002 10.5064C3.133 10.3034 3.24703 10.0281 3.24703 9.74109V1.08234C3.24703 0.795288 3.133 0.51999 2.93002 0.317011C2.72704 0.114032 2.45174 0 2.16469 0Z"
            fill="#FF9900"
        />
        <path
            d="M7.57641 0H6.49406C6.20701 0 5.93171 0.114032 5.72873 0.317011C5.52575 0.51999 5.41172 0.795288 5.41172 1.08234V9.74109C5.41172 10.0281 5.52575 10.3034 5.72873 10.5064C5.93171 10.7094 6.20701 10.8234 6.49406 10.8234H7.57641C7.86346 10.8234 8.13876 10.7094 8.34174 10.5064C8.54472 10.3034 8.65875 10.0281 8.65875 9.74109V1.08234C8.65875 0.795288 8.54472 0.51999 8.34174 0.317011C8.13876 0.114032 7.86346 0 7.57641 0Z"
            fill="#FF9900"
        />
    </svg>
);

export const HeartIcon = ({ className, width, height }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        width={width}
        height={height}
        viewBox="0 0 32 30"
        fill="none"
    >
        <path
            d="M30.8847 10.4664C30.8847 12.6999 30.0271 14.8452 28.4956 16.4321C24.9704 20.0861 21.5512 23.8965 17.8942 27.4181C17.056 28.2136 15.7263 28.1845 14.9241 27.3531L4.38841 16.4321C1.20386 13.131 1.20386 7.80182 4.38841 4.50079C7.60426 1.16733 12.8432 1.16733 16.059 4.50079L16.442 4.89774L16.8248 4.50102C18.3666 2.90192 20.4665 2 22.6602 2C24.8538 2 26.9536 2.90184 28.4956 4.50079C30.0272 6.08783 30.8847 8.23298 30.8847 10.4664Z"
            stroke="white"
            stroke-width="2.16635"
            stroke-linejoin="round"
        />
    </svg>
);

export const OtherIcon = ({ className, width, height }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        width={width}
        height={height}
        viewBox="0 0 25 8"
        fill="none"
    >
        <path
            d="M15.625 3.51562C15.625 5.45898 14.0527 7.03125 12.1094 7.03125C10.166 7.03125 8.59375 5.45898 8.59375 3.51562C8.59375 1.57227 10.166 0 12.1094 0C14.0527 0 15.625 1.57227 15.625 3.51562ZM20.7031 0C18.7598 0 17.1875 1.57227 17.1875 3.51562C17.1875 5.45898 18.7598 7.03125 20.7031 7.03125C22.6465 7.03125 24.2188 5.45898 24.2188 3.51562C24.2188 1.57227 22.6465 0 20.7031 0ZM3.51562 0C1.57227 0 0 1.57227 0 3.51562C0 5.45898 1.57227 7.03125 3.51562 7.03125C5.45898 7.03125 7.03125 5.45898 7.03125 3.51562C7.03125 1.57227 5.45898 0 3.51562 0Z"
            fill="white"
        />
    </svg>
);
export const ShuffleTrack = ({ className, width, height }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        width={width}
        height={height}
        viewBox="0 0 30 22"
        fill="none"
    >
        <path
            d="M16.5737 12.7602L19.6154 15.8124C20.3259 16.5254 21.4184 16.9424 22.5757 16.9424H28.1996"
            stroke="white"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
        <path
            d="M1 4.61598H6.62388C7.78116 4.61598 8.87363 5.03301 9.58416 5.74596L12.6758 8.84839"
            stroke="white"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
        <path
            d="M1 16.9424H6.62388C7.78116 16.9424 8.87363 16.5254 9.58416 15.8124L19.6158 5.74596C20.3263 5.03301 21.4188 4.61598 22.5761 4.61598H28.2"
            stroke="white"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
        <path
            d="M28.1996 4.616L24.5962 1"
            stroke="white"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
        <path
            d="M24.5962 8.23198L28.1996 4.61598"
            stroke="white"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
        <path
            d="M28.1996 16.9424L24.5962 13.3264"
            stroke="white"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
        <path
            d="M24.5962 20.5584L28.1996 16.9424"
            stroke="white"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
    </svg>
);

export const RepeatTrack = ({ className, width, height }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        width={width}
        height={height}
        viewBox="0 0 27 25"
        fill="none"
    >
        <path
            d="M25.1997 9.28915V12.2979C25.1978 13.9682 24.5334 15.5695 23.3524 16.7506C22.1713 17.9316 20.57 18.596 18.8997 18.5979H3.52248L6.03606 16.0843L4.76335 14.8115L2.24971 17.3251L2.00137 17.5734L0.113281 19.4616L4.27701 24.1458L5.6224 22.95L3.3539 20.3979H18.8997C23.3659 20.3979 26.9997 16.7641 26.9997 12.2979V7.48915L25.1997 9.28915Z"
            fill="white"
        />
        <path
            d="M1.8 11.8479C1.80189 10.1776 2.46624 8.57631 3.64731 7.39524C4.82838 6.21418 6.42971 5.54982 8.09999 5.54793H23.4772L20.9636 8.06157L22.2363 9.33428L24.75 6.8207L24.9815 6.58917L26.8864 4.68427L22.7227 0L21.3773 1.19587L23.6458 3.74793H8.09999C3.63374 3.74793 0 7.38168 0 11.8479V16.6734L1.8 14.8734V11.8479Z"
            fill="white"
        />
    </svg>
);

export const MediaStepBackward = ({ className, width, height }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        width={width}
        height={height}
        viewBox="0 0 20 22"
        fill="none"
    >
        <path
            d="M19.1748 0.161679C18.927 0.035827 18.6489 -0.0182833 18.3719 0.00544795C18.0949 0.0291792 17.8301 0.129808 17.6072 0.295992L5.44697 9.3034C5.25865 9.44291 5.10563 9.62461 5.0002 9.83392C4.89476 10.0432 4.83984 10.2743 4.83984 10.5087C4.83984 10.7431 4.89476 10.9742 5.0002 11.1835C5.10563 11.3928 5.25865 11.5745 5.44697 11.714L17.607 20.7215C17.8303 20.8869 18.095 20.987 18.3718 21.0107C18.6486 21.0344 18.9265 20.9808 19.1746 20.8558C19.4227 20.7308 19.6313 20.5394 19.777 20.3029C19.9227 20.0663 19.9998 19.794 19.9998 19.5162V1.50137C20.0007 1.22339 19.9239 0.950696 19.7782 0.714C19.6324 0.477303 19.4235 0.286012 19.1748 0.161679ZM17.9998 18.5236L7.17985 10.5088L17.9998 2.49419V18.5236Z"
            fill="white"
        />
        <path d="M2.00001 0.000473022H0V21.0005H2.00001V0.000473022Z" fill="white" />
    </svg>
);

export const MediaStepForward = ({ className, width, height }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        width={width}
        height={height}
        viewBox="0 0 20 22"
        fill="none"
    >
        <path
            d="M14.5528 9.30208L2.39281 0.294643C2.16958 0.12929 1.9048 0.02918 1.62801 0.00547253C1.35121 -0.0182349 1.07327 0.0353916 0.825168 0.160374C0.577062 0.285357 0.368539 0.476786 0.222842 0.713322C0.0771452 0.949859 -1.00262e-06 1.22221 2.30479e-06 1.50002V19.5148C-0.000485174 19.7928 0.0763651 20.0654 0.221961 20.3023C0.367557 20.5391 0.576159 20.7308 0.824444 20.8558C1.07273 20.9809 1.35091 21.0345 1.62788 21.0105C1.90486 20.9865 2.1697 20.886 2.39281 20.7201L14.5528 11.7128C14.7411 11.5733 14.8942 11.3916 14.9996 11.1822C15.105 10.9729 15.1599 10.7418 15.1599 10.5075C15.1599 10.2731 15.105 10.042 14.9996 9.83266C14.8942 9.62335 14.7411 9.44159 14.5528 9.30208ZM2 18.5219V2.49258L12.8199 10.5074L2 18.5219Z"
            fill="white"
        />
        <path d="M20 0.0157013H18V21.0157H20V0.0157013Z" fill="white" />
    </svg>
);

export const MusicPlayButton = ({ className, width, height }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        width={width}
        height={height}
        viewBox="0 0 43 43"
        fill="none"
    >
        <path
            d="M33.349 20.5055L16.0146 10.1875C15.8123 10.0671 15.5816 10.0024 15.3462 10.0001C15.1107 9.99772 14.8788 10.0578 14.6741 10.1742C14.4694 10.2905 14.2992 10.4591 14.1808 10.6626C14.0624 10.8661 14 11.0974 14 11.3329V31.5561C14.0003 31.7895 14.0618 32.0187 14.1783 32.2208C14.2949 32.423 14.4625 32.591 14.6643 32.7082C14.8661 32.8253 15.0952 32.8874 15.3285 32.8884C15.5619 32.8893 15.7914 32.829 15.9942 32.7134L33.3284 22.8083C33.5307 22.6927 33.6992 22.5261 33.817 22.3251C33.9348 22.1242 33.9979 21.8958 33.9999 21.6628C34.002 21.4299 33.943 21.2005 33.8287 20.9974C33.7145 20.7944 33.549 20.6248 33.3488 20.5057L33.349 20.5055ZM15.7772 30.7905V12.1144L31.7853 21.643L15.7772 30.7905Z"
            fill="white"
        />
        <circle cx="21.5" cy="21.5" r="21" stroke="white" />
    </svg>
);

export const MusicPauseButton = ({ className, width, height }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        width={width}
        height={height}
        viewBox="0 0 43 43"
        fill="none"
    >
        <path d="M15 10L15 34" stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" />
        <path d="M28 10L28 34" stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" />
        <path
            d="M36.3485 6.65164C44.55 14.8518 44.55 28.1475 36.3485 36.3484C28.1477 44.5505 14.8513 44.5505 6.65114 36.3484C-1.55038 28.1482 -1.55038 14.8525 6.65114 6.65164C14.8513 -1.55055 28.147 -1.55055 36.3485 6.65164Z"
            stroke="white"
            stroke-miterlimit="10"
        />
    </svg>
);

export const MusicExpandButton = ({ className, width, height }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
    >
        <path
            d="M1 10.6319V1H23.1177V23.1177H13.4858"
            stroke="white"
            stroke-width="1.71"
            stroke-miterlimit="10"
            stroke-dasharray="1.43 0.71"
        />
        <path d="M1 12.4156H11.7021V23.1177H1V12.4156Z" stroke="white" stroke-width="1.71" stroke-miterlimit="10" />
        <path
            d="M20.9773 7.06453V3.14043H17.0532"
            stroke="white"
            stroke-width="1.71"
            stroke-miterlimit="10"
            stroke-linejoin="bevel"
        />
        <path d="M20.9773 3.14043L15.2695 8.84821" stroke="white" stroke-width="1.71" stroke-miterlimit="10" />
    </svg>
);

export const VolumButton = ({ className, width, height }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        width={width}
        height={height}
        viewBox="0 0 20 20"
        fill="none"
    >
        <path
            d="M5.39054 4.33333H0V15.6667H5.39054L9.72388 20H11.3333V0H9.72388L5.39054 4.33333ZM4.66667 14.3333H1.33333V5.66667H4.66667V14.3333ZM10 18.3905L6 14.3905V5.60946L10 1.60946V18.3905Z"
            fill="white"
        />
        <path
            d="M16.3334 10C16.3323 9.02789 15.9456 8.0959 15.2583 7.4085C14.5709 6.72111 13.6389 6.33445 12.6667 6.33334V7.66668C13.2856 7.66668 13.8791 7.91251 14.3167 8.35009C14.7542 8.78768 15.0001 9.38117 15.0001 10C15.0001 10.6188 14.7542 11.2123 14.3167 11.6499C13.8791 12.0875 13.2856 12.3333 12.6667 12.3333V13.6667C13.6389 13.6656 14.5709 13.2789 15.2583 12.5915C15.9456 11.9041 16.3323 10.9721 16.3334 10Z"
            fill="white"
        />
        <path
            d="M12.6667 1.72688V3.07176C16.0545 3.55834 18.6667 6.47967 18.6667 10C18.6667 13.5203 16.0545 16.4417 12.6667 16.9283V18.2731C16.792 17.7775 20.0001 14.2566 20.0001 10C20.0001 5.74342 16.792 2.22251 12.6667 1.72688Z"
            fill="white"
        />
    </svg>
);

export const PlayListButton = ({ className, width, height }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        width={width}
        height={height}
        viewBox="0 0 27 27"
        fill="none"
    >
        <path
            d="M1 13.5C1 9.125 3.5 7.25 7.25 7.25H19.75C23.5 7.25 26 9.125 26 13.5V19.75C26 24.125 23.5 26 19.75 26H7.25C3.5 26 1 24.125 1 19.75V18.7125"
            stroke="white"
            stroke-width="1.43"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
        <path
            d="M18.5 4.125H21"
            stroke="white"
            stroke-width="1.43"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
        <path
            d="M6 4.125H14.9625"
            stroke="white"
            stroke-width="1.43"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
        <path
            d="M9.75 1H17.25"
            stroke="white"
            stroke-width="1.43"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
        <path
            d="M9.61191 22.3874C10.5577 22.3874 11.3244 21.6206 11.3244 20.6749C11.3244 19.729 10.5577 18.9624 9.61191 18.9624C8.66613 18.9624 7.89941 19.729 7.89941 20.6749C7.89941 21.6206 8.66613 22.3874 9.61191 22.3874Z"
            stroke="white"
            stroke-width="1.43"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
        <path
            d="M17.5997 19.5375V12.8499C17.5997 11.4249 16.7122 11.225 15.7997 11.475L12.3746 12.4125C11.7496 12.5875 11.3247 13.0749 11.3247 13.7874V14.975V15.775V20.675"
            stroke="white"
            stroke-width="1.43"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
        <path
            d="M15.8863 21.25C16.8321 21.25 17.5988 20.4832 17.5988 19.5375C17.5988 18.5916 16.8321 17.825 15.8863 17.825C14.9405 17.825 14.1738 18.5916 14.1738 19.5375C14.1738 20.4832 14.9405 21.25 15.8863 21.25Z"
            stroke="white"
            stroke-width="1.43"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
        <path
            d="M11.3247 15.7875L17.5997 14.075"
            stroke="white"
            stroke-width="1.43"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
    </svg>
);

export const FeatureIcon = ({ className, src }) => <Image src={src || images.feature} className={className} />;
export const HomeIcon = ({ className }) => <Image src={images.home} className={className} />;
export const TalkShowIcon = ({ className }) => <Image src={images.talkshow} className={className} />;
export const KaraokeIcon = ({ className }) => <Image src={images.karaoke} className={className} />;
export const PodCastIcon = ({ className }) => <Image src={images.podcast} className={className} />;
export const RadioIcon = ({ className }) => <Image src={images.radio} className={className} />;
export const LibraryIcon = ({ className }) => <Image src={images.library} className={className} />;
export const GameIcon = ({ className }) => <Image src={images.avatarFriend} className={className} />;
