import { GetStaticProps, NextPage } from "next"

interface Props {
  content: { attributes: HomeAttributes }
}

interface HomeAttributes {
  title: string;
  description: string;
  image: string;
}

const HomePage: NextPage<Props> = ({content}) => {
  const { attributes } = content

  return (
    <>
      <h1>{attributes.title}</h1>
      <p>{attributes.description}</p>
      <img src={attributes.image} alt="image"/>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const content = await import(`../content/pages/${'home'}.md`)
  return {
    props: {
      content: content.default
    }
  }
}

export default HomePage