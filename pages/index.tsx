import type { GetStaticPropsContext, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { incrementByAmount } from "../features/counter/counterSlice";
import wrapper from "../store/store";
import styles from "../styles/Home.module.scss";

type HomeProps = {
  test: string;
};

const Home: NextPage<HomeProps> = ({ test }) => {
  return (
    <div className={styles.container}>
      {test}
      <br />
    </div>
  );
};

// 서버사이드에서만 실행되는 next제공 함수
export const getStaticProps = wrapper.getStaticProps(
  (store) => async (context: GetStaticPropsContext) => {
    console.log("params", context);
    // 서버사이드이지만 redux store에 접근이 가능하다!!!
    store.dispatch(incrementByAmount(20));
    return {
      props: {
        test: "testestestes",
      },
    };
  }
);

export default Home;
