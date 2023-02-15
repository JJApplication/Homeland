import ReactMarkdown from 'react-markdown';
import WorkLayout from "./Layout";
import Layout from "../components/Layout";
import { ReactComponent } from './JJApplication.md';

export default function JJApplication() {
  return (
    <Layout>
      <WorkLayout name="JJApplication">
          <ReactComponent />
      </WorkLayout>
    </Layout>
  )
}