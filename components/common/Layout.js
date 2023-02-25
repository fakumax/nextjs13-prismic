import Head from "next/head";

import { PageContainer } from "../common/Containers";
import { Header as Navbar } from "../common/Header";
import { linkResolver } from "../../prismicio";
import { getMetaTags } from "../../utils/seo";
/**
 * The default layout for all pages.
 */
export const Layout = (props) => {
  const { children, header, footer, page, activeDocMeta } = props;

  const title = page?.data?.seoTitle || "Platform Projects";
  const description = page?.data?.seodescription || "-";

  return (
    <>
      <Head>
        <title>{title}</title>
        <link
          rel="canonical"
          href={`${activeDocMeta.sitename}${linkResolver(page)}`}
        />
        {getMetaTags(
          {
            description,
            title,
          }
        )}
      </Head>
      <PageContainer>
        <Navbar
          header={header}
          pagename={page ? (page.uid ? page.uid : page.slugs[0]) : "Home"}
          lang={page.lang || "en-us"}
          activeDocMeta={activeDocMeta}
        />
        {children}
      </PageContainer>
    </>
  );
};
