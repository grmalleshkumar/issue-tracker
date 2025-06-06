

import { prisma } from "@/prisma/client";
// import dynamic from "next/dynamic";
import { notFound } from "next/navigation";
import IssueForm from "../../_components/IssueForm";
// import IssueFormSkeleton from "../../_components/IssueFormSkeleton";

interface Props {
  params: { id: string };
}

// const IssueForm = dynamic(() => import("../../_components/IssueForm"), {
//   ssr: false,
//   loading: () => <IssueFormSkeleton />,
// });

const EditIssuePage = async ({ params }: Props) => {
  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!issue) notFound();
  return <IssueForm issue={issue} />;
};

export default EditIssuePage;
