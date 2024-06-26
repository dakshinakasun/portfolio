"use client";
import Brain from "@/components/brain";
import { motion, useInView, useScroll } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const AboutPage = () => {
  const containerRef = useRef();

  const { scrollYProgress } = useScroll({ container: containerRef });

  const skillRef = useRef();
  // const isSkillRefInView = useInView(skillRef, {once:true});
  const isSkillRefInView = useInView(skillRef, { margin: "-100px" });

  const experienceRef = useRef();
  const isExperienceRefInView = useInView(experienceRef, { margin: "-100px" });

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* CONTAINER */}
      <div
        className="h-full overflow-scroll no-scrollbar lg:flex"
        ref={containerRef}
      >
        {/* TEXT CONTAINER */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:px-32 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:w-1/2">
          {/* BIOGRAPHY CONTAINER */}
          <div className="flex flex-col gap-8 justify-center">
            {/* BIOGRAPHY IMAGE */}
            <Image
              // src="https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=800"
              src="./me.jpg"
              alt=""
              width={112}
              height={112}
              className="w-28 h-28 rounded-full object-cover"
            />
            {/* BIOGRAPHY TITLE */}
            <h1 className="font-bold text-3xl">BIOGRAPHY</h1>
            {/* BIOGRAPHY DESC */}
            <p className=" text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              harum quibusdam cupiditate nobis accusamus sed aut aperiam,
              reiciendis numquam! Voluptas voluptatibus obcaecati dolore itaque
              suscipit! Vel doloremque numquam quam nihil.
            </p>
            {/* BIOGRAPHY QUOTE */}
            <span className="italic">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </span>
            {/* BIOGRAPHY SIGN SVG*/}
            <div className="self-end">
{/*               <svg
                width="185"
                height="77"
                viewBox="0 0 370 114"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M66 2C66 29.4851 68.6687 64.5118 49.3333 87.4444C42.4997 95.5495 35.7683 97.6796 26.2222 101C20.002 103.164 8.87322 103.873 4 99C-0.260934 94.7391 2.94804 88.1756 8.22222 86.2222C13.7053 84.1915 17.942 84 23.7778 84C33.359 84 41.3193 83.5602 50.2222 87C56.6125 89.469 63.5773 91.9131 69.5555 95.5C75.4778 99.0533 87.1838 104.357 93.5 99.4444C96.1292 97.3995 96.2752 92.5118 96.9444 89.5C97.9646 84.9092 92.6432 83.2024 89 83C84.472 82.7484 82.3397 81.8856 82 88C81.8025 91.5554 83.5627 94.4193 86 97C88.9648 100.139 92.0717 100.96 96 98.7778C99.3106 96.9386 98 90.7299 98 87.5C98 85.0327 98.4365 83.1348 99.2222 80.7778C100.357 77.3743 99.2311 78.4486 101.5 77.9444C105.352 77.0886 108 76.4766 108 81.5C108 85.6646 109 89.3473 109 93.5C109 100.142 108.863 95.0454 110.5 91.4444C112.765 86.4616 116.631 81.205 121.5 78.5C127.057 75.4129 126 82.1509 126 85.5C126 92.5532 124.42 102 134 102C142.932 102 153 102.569 153 91.2222C153 87.1735 153.772 81.3206 148 81C141.934 80.663 142.107 81.8068 139.5 86.5C134.378 95.7204 137.972 105 149.5 105C153.589 105 153.996 99.8977 155.5 96.8889C157.902 92.0843 161 85.4067 161 80C161 74.0547 158.407 82.7413 157.222 84.2222C155.194 86.7574 155 92.5718 155 95.7778C155 99.9302 153.8 104.999 158 107.222C161.954 109.316 164.884 106.382 167.778 103.778C171.15 100.743 175.896 99.1107 180 97C186.143 93.8409 191.659 91.4099 198.222 89.2222C206.505 86.4614 214.839 87 223.5 87C230.613 87 231.628 104 222.5 104C216.954 104 199.251 107.814 207 95.2222C211.456 87.9805 214.484 80.6007 220 73.7778C229.781 61.6805 242.696 50.8197 256.222 43C264.769 38.0591 274.192 34.6264 283 30.2222C286.55 28.4473 280.07 32.3343 278.5 33.5556C271.707 38.8391 266.609 45.3914 260.556 51.4444C255.356 56.6444 250.682 61.459 246.5 67.5C242.917 72.6757 239.364 77.3825 236.556 83C233.829 88.4524 231.82 94.3142 228.556 99.4444C226.693 102.371 225.518 107.823 222.5 109.5C214.795 113.78 217.517 100.438 218.056 95.0556C218.678 88.8318 227.982 85.7572 233.056 88.6111C239.614 92.3003 245.506 97.7883 252 101.778C254.886 103.551 259.46 107 263 107C271.267 107 273.32 81.9392 268.778 77.2222C264.112 72.3774 261.206 80.5039 261 84C260.576 91.2135 257.836 96.9269 264.778 102C272.242 107.454 285.041 112.276 292.111 104.833C298.002 98.6323 304.301 90.8902 308.556 83.4444C310.355 80.295 310.132 84.6251 309.444 86C305.387 94.1158 303 102.264 303 111.5C303 116.021 337.534 99.1863 340.5 98C347.33 95.2679 355.47 93.8299 361.778 90C363.935 88.6902 365.473 88 368 88"
                  stroke="black"
                  strokeWidth="2"
                />
              </svg> */}
              <svg
                version="1.1"
                viewBox="0 0 1600 384"
                width="250"
                height="100"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  transform="translate(578,60)"
                  d="m0 0c5.3 2.89 7.25 7.45 9 13 7.49 33.5-4.66 70.8-20 100-0.305 0.59-0.61 1.18-0.925 1.79-1.03 1.85-1.03 1.85-2.37 3.85-4.26 6.61-4.26 12.4-3.97 20.1 0.0338 1.73 0.0338 1.73 0.0684 3.49 0.0584 2.82 0.14 5.63 0.244 8.45 0.352-0.609 0.704-1.22 1.07-1.84 19.3-33.4 19.3-33.4 28.9-38.2 3.08-0.478 5.93-0.573 9 0 3.17 2.35 4.76 5.27 6 9 0.0484 2.07 0.0372 4.14-0.00781 6.21-0.0168 1.23-0.0335 2.45-0.0508 3.72-0.0441 2.58-0.0961 5.16-0.156 7.74-0.0142 1.23-0.0284 2.46-0.043 3.73-0.0221 1.12-0.0442 2.25-0.0669 3.4 0.389 3.84 1.52 7.4 4.32 10.2 6.23 0.198 9.39-0.829 14.1-4.94 10.3-10.1 15-19.8 16.6-34 0.13-1.07 0.259-2.13 0.393-3.23 0.316-2.61 0.622-5.22 0.92-7.83h7c0.114 6.67-0.0372 13.3-0.5 19.9-1.74 15.7-1.74 15.7 3.5 30.1 2.82 2.29 4.5 3.05 8.14 2.93 9.26-1.48 14.2-8 19.8-15 4.24-5.99 7.07-12.7 10.1-19.4 3.35-7.01 6.91-13.5 12.9-18.5 3.75-0.812 3.75-0.812 7 0 2.91 2.22 3.84 3.52 5 7 0.0929 1.5 0.131 3 0.133 4.51 0.00193 0.897 0.00387 1.79 0.00586 2.72-0.00451 0.957-0.00902 1.91-0.0137 2.9-0.00193 0.976-0.00387 1.95-0.00586 2.96-0.0508 8.66-0.478 17.3-1.12 25.9 0.347-0.604 0.693-1.21 1.05-1.83 19.2-33.3 19.2-33.3 28.9-38.2 3.08-0.478 5.93-0.573 9 0 3.17 2.35 4.76 5.27 6 9 0.0601 2.08 0.0606 4.16 0.0273 6.24-0.0122 1.23-0.0245 2.46-0.0371 3.73-0.0351 2.59-0.0741 5.19-0.117 7.78-0.011 1.23-0.0219 2.47-0.0332 3.74-0.0168 1.13-0.0337 2.26-0.051 3.42 0.292 4.27 1.17 7.05 4.21 10.1 4.54 0.524 7.66 0.272 11.3-2.57 0.818-0.706 0.818-0.706 1.65-1.43 1.02-0.845 1.02-0.845 2.06-1.71 5.64-5.11 9.02-10.6 12.6-17.3 5.71-10.5 12.4-19 23.8-23.3 7.4-1.43 13.8-1.26 20.6 2.31 2.56 1.88 2.56 1.88 4 4-0.25 2.75-0.25 2.75-1 5-3 1-3 1-5.94-0.438-6.5-2.97-14.3-2.56-20.9-0.188-5.35 2.78-7.9 7.16-10.1 12.6-2.24 7.46-2.73 13.1 1 20 3.73 2.49 6.68 2.63 11 2 6.26-2.75 9.14-8.05 12-14 1.19-3.29 2.17-6.6 3-10 1.67-0.0427 3.33-0.0406 5 0 1.86 1.86 1.48 5.06 1.75 7.56 0.828 6.11 2.06 10.8 6.25 15.4 3.75 2.5 5.55 2.45 10 2 3.1-1.45 3.1-1.45 6-4 0.909-0.735 0.909-0.735 1.84-1.48 5.5-4.91 8.74-10.6 12-17.1 2.69-5.18 2.69-5.18 5.09-6.2 2.06-0.168 2.06-0.168 5.06 1.83-3.96 14.2-13.4 27.2-26 35-5.75 1.92-11.8 1.96-17.4-0.5-3.27-3.11-5.64-6.45-7.62-10.5v-2h-2c-0.266 0.587-0.531 1.17-0.805 1.78-3.04 5.65-7.95 9.94-14.1 11.9-5.3 0.933-9.63 0.098-14.4-2.25-3.92-3.46-6.48-6.92-6.94-12.3 0.0825-0.681 0.165-1.36 0.25-2.06-2.65 2.57-4.98 4.97-7.19 7.94-4.17 4.99-9.48 8.47-15.9 9.61-4.61 0.201-8.64 0.225-12.5-2.61-4.68-5.64-5.89-10.6-5.73-17.8 0.00424-0.723 0.00849-1.45 0.0129-2.19 0.0166-2.28 0.0543-4.56 0.0926-6.85 0.0151-1.56 0.0288-3.12 0.041-4.67 0.0329-3.8 0.0846-7.59 0.146-11.4-7.78 1.44-10.1 3.72-14.6 10.2-5.24 8.13-9.72 16.7-14.2 25.3-0.521 0.981-1.04 1.96-1.58 2.97-0.432 0.835-0.864 1.67-1.31 2.53-1.25 1.97-1.25 1.97-4.25 3.97-4.07 0.34-5.53 0.313-9-2-1.25-5.96-0.831-11.3-0.0625-17.2 1.19-10.3 1.26-20.4 1.06-30.8-4.21 3.78-6.46 7.4-8.81 12.5-7.17 14.9-15.8 31.1-30.6 39.4-5.56 1.66-10.2 1.84-15.8 0-7.19-4.95-9.89-10.5-11.8-18.9h-2c-1.1 1.33-2.13 2.72-3.12 4.12-5.48 7.2-11.8 12.2-20.9 13.9-3.96-0.066-6.24-0.577-9.69-2.5-7.49-8.1-6.8-17.7-6.56-28.1 0.0201-1.5 0.0383-3 0.0547-4.5 0.0437-3.65 0.113-7.29 0.195-10.9-6.64 1.36-9.15 2.41-13.1 7.99-6.27 9.86-12 20-17.3 30.4-1.61 2.7-3.16 4.62-5.57 6.64-3.27 0.467-5.1 0.655-7.81-1.31-2.38-3.38-2.45-6.87-2.75-10.9-0.0838-1.09-0.168-2.17-0.254-3.29-0.0606-0.831-0.121-1.66-0.184-2.52-0.473 0.641-0.946 1.28-1.43 1.94-7.43 9.72-16.2 17.6-28.6 20.1-10 0.841-18.6-0.365-27.1-6.06-2.4-2.4-3.85-4.06-4.19-7.5 0.25-2.44 0.25-2.44 2.25-4.44 2.72 0.292 4.43 1.25 6.81 2.62 4.77 2.06 8.39 0.974 13.2-0.625 0.73-1.83 0.73-1.83 1-4 0.125-0.665 0.25-1.33 0.379-2.02 0.745-9.06-4.12-16.3-8.38-24-2.75 2.75-4.04 6.09-5.69 9.56-3.14 6.45-6.6 12-11.3 17.4-1.14 1.55-1.14 1.55-2.31 3.12-8.22 8.8-18.2 14-30.2 14.4-7.65-0.224-13.3-1.96-19.1-6.98-3.18-3.42-4.69-7-5.35-11.6 1.43-3.28 2.44-4.71 5.64-6.37 1.01-0.352 2.01-0.704 3.05-1.07 6.75-2.62 12.2-5.42 16.3-11.5 1.19-3.65 1.58-6.25 1-10.1-2.04-2.19-2.04-2.19-5-3-4.48 0.187-7.27 1.62-11 4h-2c-0.257 0.544-0.513 1.09-0.777 1.65-1.22 2.35-1.22 2.35-2.85 4.89-5.68 9.06-9.05 18.5-12.3 28.7-0.534 1.64-0.534 1.64-1.08 3.31-0.31 0.984-0.621 1.97-0.941 2.98-1.05 2.52-1.86 3.88-4.04 5.51-2.62-0.188-2.62-0.188-5-1-1.15-2.29-1.2-3.8-1.32-6.35-0.0419-0.851-0.0838-1.7-0.127-2.58-0.0393-0.889-0.0786-1.78-0.119-2.7-0.0432-0.897-0.0864-1.79-0.131-2.72-0.106-2.22-0.208-4.44-0.307-6.66-0.485 0.724-0.969 1.45-1.47 2.2-5.33 7.68-10.5 13.8-19.5 16.8-5.15 0.645-9.6 0.622-14.4-1.5-3.27-3.11-5.64-6.45-7.62-10.5v-2h-2c-0.186 0.701-0.371 1.4-0.562 2.12-2.57 5.15-6.86 7.95-11.8 10.8-4.87 1.4-8.8 1.47-13.7 0.0625-4.89-2.82-8.18-6.64-10-12-2.03-9.77-0.648-19.2 4.62-27.8 5.54-7.52 12-13.6 21.4-15.2 6.85-0.954 13 0.506 19 4 1.81 2 1.81 2 3 4-0.312 2.25-0.312 2.25-1 4-1.56 0.688-1.56 0.688-4 1-0.99-0.474-1.98-0.949-3-1.44-5.7-2.65-12.4-2.61-18.4-0.871-6.22 2.81-10.6 7.73-13.1 14.1-1.24 5.46-1.61 12.2 0.332 17.5 1.21 2.04 1.21 2.04 4.17 3.73 4.62 0.455 7 0.488 11.2-1.56 7.31-6.34 9.35-13.3 11.8-22.4h5c2.01 3.41 2.43 6.47 2.88 10.4 0.761 5.34 1.54 8.6 5.12 12.6 3.75 2.5 5.55 2.45 10 2 3.24-1.85 3.24-1.85 6-4 0.99-0.33 1.98-0.66 3-1 0.686-1.32 1.35-2.66 2-4 0.742-0.846 1.48-1.69 2.25-2.56 5.76-6.7 9.81-14.5 9.94-23.4 0.0251-1.5 0.0251-1.5 0.0508-3.02 0.0135-1.09 0.0271-2.17 0.041-3.3 0.018-1.15 0.0361-2.3 0.0547-3.48 0.0386-2.5 0.0751-4.99 0.11-7.49 0.0548-3.95 0.115-7.89 0.177-11.8 0.142-9.08 0.275-18.2 0.408-27.2 0.131-8.99 0.267-18 0.408-27 0.0599-3.9 0.114-7.8 0.168-11.7 0.0368-2.37 0.0739-4.75 0.111-7.12 0.0135-1.09 0.0271-2.19 0.041-3.31 0.0251-1.48 0.0251-1.48 0.0508-3 0.0125-0.864 0.0251-1.73 0.038-2.62 0.151-1.95 0.151-1.95 1.15-2.95 2.34 0.287 4.67 0.619 7 1 0.0486 10 0.0392 20.1-0.219 30.1-0.0222 0.87-0.0444 1.74-0.0673 2.64-0.047 1.83-0.0942 3.66-0.141 5.49-0.554 21.9-0.66 43.8-0.635 65.7 8.56e-4 0.749 0.00171 1.5 0.00259 2.27 0.0114 9.24 0.0314 18.5 0.0599 27.7 0.46-1.08 0.919-2.17 1.39-3.28 0.62-1.44 1.24-2.89 1.86-4.33 0.301-0.712 0.602-1.42 0.912-2.16 4.11-9.51 9.68-17.9 18.8-23.2 5.37-1.79 10.2-1.88 15.3 0.625 3.74 3.3 6.27 5.85 7.11 10.9 0.349 6.82-0.93 11.3-5.42 16.4-5.12 5.44-11 9.31-18 12h-3c1.94 4.37 4.32 6.36 8.56 8.27 7.23 2.17 14.6 1.49 21.3-1.94 10.2-6.31 16.9-14 22.3-24.6 0.434-0.835 0.868-1.67 1.32-2.53 2.94-5.78 5.83-11.7 6.5-18.2-0.33-0.99-0.66-1.98-1-3-0.394-4.12-0.57-7.77 1.19-11.6 1.81-1.44 1.81-1.44 4.31-2 2.5 0.562 2.5 0.562 4.38 2.38 1.23 3.48 0.967 4.48 0.297 7.98-0.811 7.82 2.77 14 6.2 20.7 0.625 1.27 1.25 2.55 1.87 3.82 1.13 2.32 2.28 4.63 3.44 6.94 2.23 4.62 2.86 8.65 2.32 13.7-1.48 4.24-3.27 7.48-6 11 8.59 0.13 14.4-2.54 21-8 11.3-11.4 14.6-20.9 14.7-36.8 0.0299-1.55 0.0619-3.1 0.0958-4.65 0.0854-4.08 0.15-8.16 0.208-12.2 0.556-38.6 0.556-38.6 2.28-57.3 0.106-1.21 0.212-2.41 0.321-3.66 1.3-12.7 3.31-27.5 13.4-36.4 3.87-1.29 7.11-0.954 11 0zm-10.6 8.65c-16.1 26.3-8.74 73.3-8.43 102 2.22-2.15 3.58-3.86 4.8-6.71 0.316-0.74 0.631-1.48 0.956-2.24 0.329-0.799 0.658-1.6 0.997-2.42 0.346-0.835 0.693-1.67 1.05-2.53 8.67-21.3 14.3-41.9 14.5-65 0.029-1.22 0.058-2.43 0.0879-3.68 0.0523-7.46-0.53-13.9-4.4-20.4-3.34-1.67-6.86-2.2-9.57 0.652z"
                  fill="#000002"
                />
                <path
                  transform="translate(190 57.6)"
                  d="m0 0c1.22 0.00131 1.22 0.00131 2.47 0.00266 33.2 0.118 69.3 8.7 94.7 31.4 0.962 0.852 1.92 1.7 2.91 2.58 13.5 12.7 24 30.7 25.3 49.5 0.101 3.42 0.119 6.84 0.109 10.3 0.0161 1.15 0.0322 2.29 0.0488 3.47 0.00613 10.8-1.98 20.6-6.99 30.3-0.347 0.676-0.694 1.35-1.05 2.05-8.86 16.7-23.6 28.6-41.5 34.6-29.3 8.75-60 2.91-86.9-10.7-1.24-0.776-2.48-1.56-3.71-2.34-3.02-1.98-3.02-1.98-5.44-1.12-0.61 0.481-1.22 0.962-1.85 1.46-0.723 0.512-1.45 1.02-2.19 1.55-1.17 0.872-1.17 0.872-2.37 1.76-13.1 9.21-29.1 14.2-45.2 12.2-9.39-1.84-17.1-4.01-23.1-11.7-3.14-4.7-3.66-8.99-2.85-14.5 1.69-5.95 5.66-10 10.8-13.2 12.9-6.46 27.6-4.63 40.9-0.475 7.63 2.59 15 5.6 22 9.56 2.08 1.09 2.08 1.09 4.92-0.215 1.45-2.3 2.67-4.52 3.88-6.94 0.326-0.608 0.652-1.22 0.988-1.84 7.49-14.9 9.71-32.5 12.6-48.7 3.33-18.5 7.78-35.7 22.5-48.5 3.23-2.15 4.28-2.2 8-2 0.99 2.47 0.99 2.47 2 5-2.57 2.65-4.97 4.98-7.94 7.19-10.5 8.66-13.4 24.2-15.7 36.8-0.372 2.05-0.756 4.1-1.14 6.16-0.937 4.96-1.86 9.92-2.78 14.9-2.68 14.2-6.19 27.8-14.2 40.1-1.36 2.01-1.36 2.01-2.2 4.92 0.786 0.25 1.57 0.5 2.38 0.758 2.78 0.955 5.5 1.97 8.23 3.05 25.5 10.1 54 17.2 80.5 6.33 8.22-3.58 15.7-7.57 21.9-14.1 0.588-0.557 1.18-1.11 1.78-1.69 12.1-12.3 15.7-30.2 15.6-46.8-0.604-21.4-11.3-38.3-26.4-52.9-9.65-8.63-21.1-14.9-33.1-19.7-1-0.402-1-0.402-2.02-0.812-27.8-10.8-58.9-12.3-88-6.19-0.683 0.139-1.37 0.278-2.07 0.422-16.1 3.41-31.6 10.7-41.5 24.3-2.25 3.62-3.51 7.17-4.44 11.3-0.165 0.708-0.33 1.42-0.5 2.14-1.26 7.3 0.209 14.8 3.83 21.2 5.91 8.24 12.4 11.6 21.7 15 2.95 1.62 2.95 1.62 4.05 4.12-0.105 2.5-0.105 2.5-1.29 4.34-1.82 1.16-1.82 1.16-3.73 1.23-10.1-2.36-18.7-7.9-25.1-16.1-7.04-11.6-9.74-22.6-6.94-35.9 1.76-6.5 4.98-11.7 8.94-17.1 0.611-0.848 1.22-1.7 1.85-2.57 8.84-10 24.7-15.6 37.1-19.2 0.699-0.199 1.4-0.398 2.12-0.602 12.5-3.34 24.9-4.06 37.8-4.02zm-87.9 138c-2.4 3.96-2.97 5.65-1.94 10.2 4.58 5.99 10.7 8.9 18 10 15.7 1.22 27.5-2.59 41-10 0.96-0.526 1.92-1.05 2.91-1.59 0.69-0.464 1.38-0.928 2.09-1.41v-2c-31.4-15.1-31.4-15.1-62.1-5.19z"
                  fill="#000002"
                />
                <path
                  transform="translate(1173,54)"
                  d="m0 0c0.33 0.99 0.66 1.98 1 3-1.47 2.82-2.44 3.82-5.5 4.8-0.971 0.169-1.94 0.338-2.94 0.512-17.7 3.98-29 17.2-38.6 31.7-1.92 3.11-3.75 6.27-5.58 9.43-3.82 6.47-8.36 12.3-13.2 18.1-1.12 1.35-2.22 2.71-3.32 4.08-9.5 11.4-21.9 17.9-34.9 24.4 0.515 0.373 1.03 0.745 1.56 1.13 6.37 4.77 12 10.1 17.6 15.8 1.5 1.52 3.01 3.04 4.53 4.55 5.32 5.34 10.5 10.8 15.4 16.5 6.49 7.6 13 14.5 21.2 20.2 0.955 0.668 0.955 0.668 1.93 1.35 6.83 4.52 14.5 7.64 22.8 6.46 7.09-1.67 12.6-4.56 17.8-9.75 0.743-0.742 1.49-1.48 2.25-2.25h2c0.33-0.99 0.66-1.98 1-3 1.65 0.33 3.3 0.66 5 1 0.656 1.76 0.656 1.76 1 4-4.47 8.91-12.9 14.7-22 18-8.28 2.61-17.9 1.9-25.7-1.75-10.8-5.9-19.3-14.2-28-22.8-0.784-0.776-0.784-0.776-1.58-1.57-2.79-2.81-5.46-5.68-8.05-8.68-10.3-11.8-21.5-23.6-34.7-32.2-0.741-0.584-1.48-1.17-2.25-1.77-4.11-1.84-7.57-1.06-11.9-0.418-1.7 0.215-3.4 0.426-5.11 0.633-0.813 0.101-1.63 0.202-2.46 0.306-5.21 0.578-10.2 0.914-15.2-0.751-0.0748 1.06-0.15 2.11-0.227 3.2-1.72 20.6-6.72 43.4-22.8 57.8-15.3 11.4-33.9 12.9-52.4 10.7-11.3-1.98-23.5-7.41-31.6-15.7-1.06-2.12-1.06-2.12-1-4 1.44-1.75 1.44-1.75 3-3 3.96 1.02 6.9 2.53 10.2 4.88 13.3 9.15 30.6 11 46.3 8.59 5.91-1.37 11.4-3.22 16.5-6.46 1.22-0.764 1.22-0.764 2.46-1.54 12.8-9.04 16.9-24.9 19.5-39.6 0.297-1.81 0.587-3.62 0.871-5.44 0.136-0.866 0.273-1.73 0.413-2.62 0.118-0.818 0.235-1.64 0.356-2.48 0.105-0.728 0.211-1.46 0.32-2.21 0.145-3.06-0.543-5.35-1.9-8.07-0.25-2.94-0.25-2.94 0-6 0.491-0.48 0.981-0.961 1.49-1.46 2.64-2.69 2.03-6.48 2.1-10.1 0.0631-1.74 0.126-3.49 0.189-5.23 0.0815-2.73 0.157-5.46 0.229-8.19 0.383-13.5 1.74-25.4 6.99-38.1-0.922-0.0856-1.84-0.171-2.79-0.26-3.46-0.322-6.92-0.644-10.4-0.967-1.49-0.139-2.98-0.278-4.47-0.416-2.16-0.2-4.31-0.402-6.47-0.603-0.699-0.0654-1.4-0.131-2.12-0.198-3.61-0.341-7.21-0.71-10.8-1.13-14.5-1.54-27.9-0.898-40.1 8.02-6.27 5.23-9.93 11.9-11.2 19.9-0.28 5.6 1.01 10.1 4.39 14.6 4.67 4.47 10.2 7.3 16 10-0.33 1.65-0.66 3.3-1 5-7.24 0.603-11.6-1.89-17.6-5.62-6.13-6.13-9.51-13.3-9.69-21.9 0.103-9.98 2.84-17.8 9.27-25.5 3.58-3.5 7.58-5.79 12-8 0.748-0.391 1.5-0.781 2.27-1.18 14.6-6.79 31.1-4.68 46.6-2.94 17.8 3.46 17.8 3.46 34.3 0.631 1.31-1.16 2.58-2.38 3.81-3.62 4.72-4.51 12.4-8.89 19-8.88 2.98 0.255 5.39 0.611 7.9 2.31 1.28 2.04 1.92 3.26 2.06 5.69-2.28 5.07-5.47 7.97-10.6 10.1-5.15 1.81-9.97 3.06-15.4 3.68-4.15 0.727-4.71 0.875-7.44 4.38-0.864 2.25-0.864 2.25-1.56 4.88-0.325 1.1-0.649 2.21-0.984 3.34-2.77 10.3-3.83 20.1-4.27 30.7-0.0767 1.57-0.155 3.13-0.234 4.7-0.189 3.77-0.358 7.54-0.516 11.3 0.64-0.016 1.28-0.0319 1.94-0.0483 5.25-0.0754 9.98 0.209 15.1 1.42 1.2 0.266 2.4 0.531 3.63 0.805 3.3 0.82 3.3 0.82 5.67 1.64 7.53 2.47 14.7-0.699 21.6-3.82 7.99-4.13 14.6-9.72 21-16 0.665-0.652 1.33-1.3 2.02-1.98 7.82-8.23 13.7-18.4 19.4-28.2 10.5-18.1 25.3-32.3 45.7-38.5 3.07-0.584 5.9 0.102 8.95 0.629zm-121 11.9c-1.6 0.801-1.6 0.801-3.23 1.62-2.68 1.25-2.68 1.25-3.58 3.51 6.49-0.423 11.3-2.91 17-6v-2c-4.4 0-6.31 0.903-10.2 2.88zm-23.8 79.1c-0.33 0.66-0.66 1.32-1 2 3.05 1.02 5.24 1.17 8.44 1.19 1.42 0.0213 1.42 0.0213 2.87 0.043 2.74-0.234 4.36-0.833 6.69-2.23-5.67-1.23-11.2-1.09-17-1z"
                  fill="#000002"
                />
                <path
                  transform="translate(1286 152)"
                  d="m0 0c2.5 0.562 2.5 0.562 4.17 2.23 1.72 3.02 1.44 4.79 1.15 8.23-0.187 7.99 2.56 13.7 6.12 20.7 1.11 2.28 2.23 4.57 3.34 6.85 0.497 0.991 0.995 1.98 1.51 3 2.64 5.47 2.84 10.5 2.22 16.5-1.34 3.58-3.29 6.29-6 9 10.1-0.0431 16.9-3.91 24.2-10.8 7.23-7.75 10.8-16.5 14.1-26.4 1.84-5.37 4.12-9.39 7.62-13.9 1.98 0.66 3.96 1.32 6 2-0.587 3.71-1.64 6.52-3.44 9.81-4.62 9.11-5.62 18-4.56 28.2 1.75 3.73 1.75 3.73 5 6 6.12 0.51 9.14 0.1 14-4 5.35-5.59 7.03-10.6 7.82-18.2 0.187-1.72 0.187-1.72 0.377-3.48 0.122-1.19 0.244-2.37 0.369-3.59 0.247-2.37 0.499-4.74 0.754-7.11 0.108-1.05 0.215-2.09 0.326-3.17 0.357-2.41 0.357-2.41 1.36-3.41 2-0.0408 4-0.0425 6 0-0.0209 0.922-0.0419 1.84-0.0635 2.79-0.0687 3.46-0.119 6.92-0.156 10.4-0.02 1.49-0.0472 2.98-0.082 4.47-0.315 13.7-0.315 13.7 6.11 25.4 4.18 1.79 7.81 1.39 12.1 0 9.81-6.47 14.3-14.6 19.1-25 1.64-3.46 3.4-6.85 5.18-10.2 0.463-0.904 0.463-0.904 0.936-1.83 2.35-4.45 5.24-9.73 9.88-12 3.38-0.375 3.38-0.375 7 0 3.61 3.51 4.94 6.37 5.13 11.4 0.00402 1.36 0.00105 2.73-0.00781 4.09-0.00193 0.717-0.00387 1.43-0.00586 2.17-0.0393 4.87-0.31 9.67-0.9 14.5-0.331 4.27-0.256 8.54-0.219 12.8 0.311-0.533 0.622-1.07 0.943-1.61 10.5-18 10.5-18 16.4-26.3 0.739-1.06 1.48-2.12 2.24-3.21 3.34-3.89 6.89-7.16 11.9-8.51 4.31 0.0784 6.02 0.262 9.52 3.04 3 3.93 3.11 5.79 3.03 10.7-0.0122 1.23-0.0245 2.45-0.0371 3.71-0.0349 2.58-0.0739 5.16-0.117 7.74-0.197 8.95-0.197 8.95 2.13 17.5 3.65 2.43 5.24 2.44 9.46 1.85 10.9-3.64 17.1-15.9 22-25.5 0.516-1.09 1.03-2.19 1.56-3.31 2.94 0.375 2.94 0.375 6 1 0.33 0.66 0.66 1.32 1 2-1.06 2.58-2.18 5.02-3.44 7.5-0.365 0.722-0.731 1.44-1.11 2.19-3.16 6.05-6.77 11.3-11.5 16.3-0.637 0.678-1.27 1.36-1.93 2.05-4.71 4.56-9.52 7.12-16.1 7.95-4.29-0.187-7.33-1.51-10.8-4.06-6.08-8.16-5.56-17.2-5.38-27 0.0151-1.36 0.0288-2.71 0.041-4.07 0.0351-3.29 0.0843-6.58 0.146-9.87-3.71 0-5.94 0.113-8.83 2.52-4.29 4.78-7.56 10.1-10.7 15.7-0.469 0.825-0.938 1.65-1.42 2.5-3.33 5.89-6.54 11.8-9.64 17.8-1.32 2.27-2.36 3.87-4.44 5.47-6.07 0.65-6.07 0.65-8.7-1.19-1.79-2.5-1.63-4.15-1.55-7.2 0.0406-1.61 0.0406-1.61 0.082-3.24 0.269-5.41 0.683-10.8 1.17-16.2 1.48-11.2 1.48-11.2 0-22.2-5.03 5.34-7.94 10.6-10.9 17.2-3.66 7.99-7.35 15.1-13.1 21.8-0.584 0.682-1.17 1.36-1.77 2.07-5.15 5.56-11.5 9.61-19.2 9.93-5.88-0.652-9.14-2.36-13-7-1.8-2.27-3.39-4.58-5-7-0.519 0.615-1.04 1.23-1.57 1.86-0.697 0.808-1.39 1.62-2.11 2.45-0.684 0.801-1.37 1.6-2.07 2.43-4.45 4.49-8.49 5.94-14.7 6.39-5.46-0.274-9.21-2.73-12.9-6.57-2.59-4.08-3.62-6.69-3.62-11.6h-2c-0.245 0.732-0.49 1.46-0.742 2.22-3.7 8.19-12.4 14.3-20.5 17.7-9.62 3.37-19.8 3.33-29.3-0.562-4-2.28-7.38-5.24-9.46-9.4 0.328-2.75 0.328-2.75 1-5 1.56-0.75 1.56-0.75 4-1 1.71 1.04 3.43 2.07 5.13 3.12 3.21 1.5 5.57 0.869 8.87-0.125 3.36-2.21 3.92-3.72 5-7.62 0.549-6.87-3.24-12.9-6.25-18.9-1.75-3.5-1.75-3.5-1.75-5.5-3 1.5-3.35 4.07-4.62 7.02-6.35 13.8-14.1 26.9-27.4 35-5.7 1.9-11.8 1.96-17.3-0.438-3.6-3.44-6.13-7.31-8.69-11.6-0.629 0.687-1.26 1.37-1.91 2.08-10.2 10.7-10.2 10.7-18.4 11-5.19-0.312-8.75-1.57-12.7-5.08-4.8-6.61-5.75-13-5-21 2.18-10.9 6.39-19 15.5-25.4 6.43-3.92 13-5.6 20.5-4.56 4.56 1.46 8.94 3.17 12 7-0.312 2.69-0.312 2.69-1 5-0.99 0.33-1.98 0.66-3 1-0.949-0.474-1.9-0.949-2.88-1.44-6-2.75-13.3-2.6-19.6-0.906-5 2.2-8.21 5.43-10.6 10.3-2.72 7.24-4.32 14.7-1 22 2.84 2.7 3.88 2.99 7.94 3.38 3.85-0.192 6.08-0.783 9.06-3.38 4.6-5.46 6.87-10.9 8.46-17.8 0.543-2.19 0.543-2.19 1.54-3.19 2.5-0.125 2.5-0.125 5 0 1.87 1.87 1.53 5.11 1.81 7.62 0.777 5.83 1.91 9.56 5.19 14.4v2c5.03 0.93 8.79 1.48 13.6-0.438 8.09-5.57 13.2-12.9 17.7-21.4 0.511-0.929 1.02-1.86 1.55-2.82 4.34-8.09 8.02-15.8 6.64-25.1-0.547-3.74-0.781-5.58 0.812-9.04 1.69-2.15 1.69-2.15 4.19-2.71z"
                  fill="#000002"
                />
                <path
                  transform="translate(648 125)"
                  d="m0 0c3.04 0.682 4.8 2.24 6.93 4.43 1.55 3.1 1.29 5.58 1 9-1.8 2.75-3.05 4.53-6 6-7.56 0.42-7.56 0.42-11-2-2.69-4.03-2.79-7.27-2-12 3-4.6 5.78-5.76 11.1-5.43zm-6.07 7.43c-0.333 2.5-0.333 2.5 0 5 0.66 0.66 1.32 1.32 2 2 3.83-0.188 3.83-0.188 7-2 0.25-2.46 0.25-2.46 0-5-1.83-2.25-1.83-2.25-4.5-2.25-2.67 8.09e-4 -2.67 8.09e-4 -4.5 2.25z"
                  fill="#000002"
                />
              </svg>
            </div>
            {/* BIOGRAPHY SCROLL SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>

          {/* SKILLS CONTAINER */}
          <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
            {/* SKILL TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-3xl"
            >
              SKILLS
            </motion.h1>
            {/* SKILL LIST */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              className="flex gap-2 lg:gap-4 flex-wrap"
            >
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                JavaScript
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                TypeScript
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                React.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Next.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                SCSS
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Tailwind CSS
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                MongoDB
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                PostgreSQL
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Node.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Nest.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Express.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Spring Boot
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                GraphQL
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Apollo
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Redux
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Framer Motion
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Three.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                WebGL
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Webpack
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Vite
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Docker
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                AWS
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Firebase
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Git
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Figma
              </div>
            </motion.div>
            {/* SKILL SCROLL SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          {/* EXPERIENCE CONTAINER */}
          <div
            className="flex flex-col gap-12 justify-center"
            ref={experienceRef}
          >
            {/* EXPERIENCE TITLE */}
            <motion.h1
              initial={{ x: "-550px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-3xl"
            >
              EDUCATION & EXPERIENCE
            </motion.h1>
            {/* EXPERIENCE LIST */}
            <motion.div
              initial={{ x: "-550px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              className=""
            >
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-white p-1.5 font-semibold rounded-b-lg rounded-s-lg">
                    Bachelors Degree
                  </div>
                  {/* JOB DESC */}
                  <div className="p-1 text-sm italic">
                    B.Sc. (Hons) in Information Technology Specializing in
                    Information Technology.{" "}
                  </div>
                  {/* JOB DATE */}
                  <div className="p-1 text-red-400 text-sm font-medium">
                    Dec 2018 - March 2023
                  </div>
                  {/* JOB COMPANY */}
                  <div className="p-1 rounded bg-white text-xs font-semibold w-fit">
                    SLIIT
                  </div>
                </div>

                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>

                {/* RIGHT */}
                <div className="w-1/3 "></div>
              </div>

              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 "></div>

                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>

                {/* RIGHT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-white p-1.5 font-semibold rounded-b-lg rounded-e-lg">
                    Full Stack Developer Intern
                  </div>
                  {/* JOB DESC */}
                  <div className="p-1 text-sm italic">
                    I spearheaded React-based application development,
                    leveraging advanced skills.{" "}
                  </div>
                  {/* JOB DATE */}
                  <div className="p-1 text-red-400 text-sm font-medium">
                    Jan 2022 - July 2022{" "}
                  </div>
                  {/* JOB COMPANY */}
                  <div className="p-1 rounded bg-white text-xs font-semibold w-fit">
                    NKR Strategic Holdings
                  </div>
                </div>
              </div>

              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-white p-1.5 font-semibold rounded-b-lg rounded-s-lg">
                    Full Stack Developer{" "}
                  </div>
                  {/* JOB DESC */}
                  <div className="p-1 text-sm italic">
                    I provided web solutions, applying a range of technologies
                    to address client requirements.{" "}
                  </div>
                  {/* JOB DATE */}
                  <div className="p-1 text-red-400 text-sm font-medium">
                    July 2022 - July 2023{" "}
                  </div>
                  {/* JOB COMPANY */}
                  <div className="p-1 rounded bg-white text-xs font-semibold w-fit">
                    NKR Strategic Holdings
                  </div>
                </div>

                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>

                {/* RIGHT */}
                <div className="w-1/3 "></div>
              </div>

              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 "></div>

                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  <Link
                    href="./Dakshina_Kasun Resume.pdf"
                    download="Dakshina_Kasun Resume.pdf"
                    className="absolute p-2 rounded bg-gray-500 text-white text-sm font-semibold hover:ring-1 hover:ring-gray-500 hover:bg-white hover:text-gray-500"
                  >
                    Download Resume
                  </Link>
                </div>

                {/* RIGHT */}
                <div className="w-1/3 "></div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* SVG CONTAINER */}
        <div className="hidden lg:block w-1/3 sticky top-0 z-30 xl:w-1/2">
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
