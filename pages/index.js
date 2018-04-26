import Link from "next/link"

export default () => (
  <table>
    <thead>
      <tr>
        <td>page</td>
        <td>url</td>
        <td>client</td>
        <td>server</td>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>/pages/simple.js</td>
        <td>
          <Link href="/simple">
            <a>/simple</a>
          </Link>
        </td>
        <td>✅</td>
        <td>✅</td>
      </tr>

      <tr>
        <td>/pages/simple.js</td>
        <td>
          <Link href="/simple/">
            <a>/simple/</a>
          </Link>
        </td>
        <td>✅</td>
        <td>404</td>
      </tr>

      <tr>
        <td>/pages/nested/index.js</td>
        <td>
          <Link href="/nested">
            <a>/nested</a>
          </Link>
        </td>
        <td>✅</td>
        <td>✅</td>
      </tr>

      <tr>
        <td>/pages/nested/index.js</td>
        <td>
          <Link href="/nested/">
            <a>/nested/</a>
          </Link>
        </td>
        <td>✅</td>
        <td>404</td>
      </tr>

      <tr>
        <td>/pages/blog.js</td>
        <td>
          <Link href="/blog?id=first" as="/blog/first">
            <a>/blog/first</a>
          </Link>
        </td>
        <td>✅</td>
        <td>404</td>
      </tr>
    </tbody>

    <style jsx>{`
      table {
        border: 1px solid;
      }
      thead {
        font-weight: bold;
      }
      td {
        padding: 20px;
        border: 1px solid;
      }
    `}</style>
  </table>
)
