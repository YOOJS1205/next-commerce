"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import styles from "./Auth.module.scss";

import Logo from "@/assets/colorful.svg";

export default function LoginClient() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isAutoLogin, setIsAutoLogin] = useState(false);

  const router = useRouter();

  // 로그인 성공 시 홈으로 redirect
  const redirectUser = () => {
    router.push("/");
  };

  // 로그인 버튼 클릭 시 호출 함수
  const loginUser = (e) => {
    e.preventDefault();
    setIsLoading(true);
  };

  // 구글로 시작하기
  const signInWithGoogle = (e) => {
    e.preventDefault();
  };

  return (
    <section className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.logo}>
          <Image src={Logo} priority alt="logo" />
        </h1>

        <form onSubmit={loginUser} className={styles.form}>
          {/* Input */}

          <div className={styles.group}>{/* 자동 로그인, 비밀번호 수정 */}</div>

          <div className={styles.buttonGroup}>
            {/* button */}
            <div>{/* button */}</div>
          </div>
        </form>
      </div>
    </section>
  );
}
