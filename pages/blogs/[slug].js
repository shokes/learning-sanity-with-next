import PageLayout from 'components/PageLayout';
import { useRouter } from 'next/router';

const BlogData = function () {
  const router = useRouter();
  return (
    <PageLayout>
      <h1>hello detail page</h1>
    </PageLayout>
  );
};

export default BlogData;
