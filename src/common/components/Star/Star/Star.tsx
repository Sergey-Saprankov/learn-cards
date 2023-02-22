import React, { FC, memo } from 'react'

import s from '../Stars.module.scss'

type StarType = {
  active: boolean
}

export const Star: FC<StarType> = memo(({ active }) => {
  return (
    <svg
      className={active ? `${s.star} ${s.hover}` : s.star}
      viewBox="0 0 150 143"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_di_1_2)">
        <path
          d="M72.1468 7.78115C73.0449 5.01722 76.9551 5.01722 77.8532 7.78115L91.165 48.7508C91.5666 49.9868 92.7185 50.8237 94.0182 50.8237H137.096C140.002 50.8237 141.211 54.5426 138.86 56.2508L104.009 81.5714C102.957 82.3353 102.517 83.6894 102.919 84.9255L116.231 125.895C117.129 128.659 113.965 130.957 111.614 129.249L76.7634 103.929C75.7119 103.165 74.2881 103.165 73.2366 103.929L38.3858 129.249C36.0347 130.957 32.8712 128.659 33.7693 125.895L47.0811 84.9255C47.4827 83.6894 47.0428 82.3353 45.9913 81.5714L11.1405 56.2508C8.78931 54.5426 9.99764 50.8237 12.9038 50.8237H55.9818C57.2815 50.8237 58.4334 49.9868 58.835 48.7508L72.1468 7.78115Z"
          fill="#FFF"
        />
        <path
          d="M93.5427 47.9782L91.165 48.7508L93.5426 47.9782L80.2308 7.00861C78.5844 1.94141 71.4156 1.94139 69.7692 7.00861L56.4574 47.9782C56.3904 48.1842 56.1984 48.3237 55.9818 48.3237H12.9038C7.57584 48.3237 5.36056 55.1416 9.67099 58.2733L44.5218 83.5939C44.6971 83.7213 44.7704 83.9469 44.7035 84.1529L31.3916 125.123C29.7452 130.19 35.5448 134.403 39.8553 131.272L74.7061 105.951C74.8814 105.824 75.1187 105.824 75.2939 105.951L110.145 131.272C114.455 134.403 120.255 130.19 118.608 125.123L105.297 84.153C105.23 83.9469 105.303 83.7213 105.478 83.5939L140.329 58.2733C144.639 55.1416 142.424 48.3237 137.096 48.3237H94.0182C93.8016 48.3237 93.6096 48.1842 93.5427 47.9782Z"
          stroke="black"
          strokeWidth="5"
        />
      </g>
      <defs>
        <filter
          id="filter0_di_1_2"
          x="0.888474"
          y="0.708202"
          width="148.223"
          height="142.15"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_2" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_2" result="shape" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="-10" dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend mode="normal" in2="shape" result="effect2_innerShadow_1_2" />
        </filter>
      </defs>
    </svg>
  )
})
