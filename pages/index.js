import React from "react";
import Head from "next/head";
import { SliceZone } from "@prismicio/react";
import { createClient } from "../prismicio";
import { asText } from "@prismicio/helpers";
import { components } from "../slices/index";
import { Layout } from "../components/common/Layout";


const Home = (props) => {
  if (props.error) {
    return <>{console.error(props, "index")}</>;
  }

  const { page, menu } = props;
  const { lang, type, url } = page;

  const activeDoc = {
    lang,
    type,
    url,
    sitename: process.env.NEXT_PUBLIC_SITENAME || "http://localhost",
  };

  return (
    <Layout
      header={menu || {}}
      page={page}
      activeDocMeta={activeDoc}
    >
      {console.log('slices = ', page.data.slices)}
      {console.log('menu = ', props.menu)}
      <SliceZone slices={page?.data?.slices} components={components} />
    </Layout>
  );
};

export async function getStaticProps({ locale, previewData }) {
  try {
    const client = createClient({ previewData });
    let page;
    try {
      page = await client.getSingle("homepage");
    } catch (error) {
      page = await client.getSingle("homepage");
    }
    let menu;
    try {
      menu = await client.getSingle("menutop");

    } catch (error) {
      menu = await client.getSingle("menutop");
    }

    return {
      props: {
        page,
        menu
      },
    };
  } catch (error) {
    return {
      props: {
        error: JSON.stringify(error),
        locale,
      },
    };
  }
}

export default Home;
