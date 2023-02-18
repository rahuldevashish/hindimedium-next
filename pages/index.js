import Page from '@components/page'
import Link from '@components/link'

const About = () => {
  return (
    <Page description="This is home page.">
      <article>
        <h1>Hare Krishna </h1>

        <p>
          {' '}
          <Link underline href="/keyboards">
            Technology
          </Link>{' '}<br />
          {' '}
          <Link underline href="/music">
            Music
          </Link>{' '}<br />
          {' '}
          <Link underline href="/blog">
            Blog
          </Link>{' '}<br />
          <Link underline href="/quotes">
            Spirituality
          </Link>{' '}
        </p>

        <p>
          {' '}
          <Link underline href="#" external>

          </Link>{' '}
        </p>
      </article>
    </Page>
  )
}

export default About
