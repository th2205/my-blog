import { myData } from "@/data/myData";
import Header from "@/components/common/Header";
import { ResumeLayout } from "@/components/resume/ResumeLayout";
import { MyInfo } from "@/components/resume/MyInfo";
import { WorkExperience } from "@/components/resume/WorkExperience";
import { WorkExperienceDetail } from "@/components/resume/WorkExperienceDetail";
import { ResumeTitle } from "@/components/resume/ResumeTitle";
import { About } from "@/components/resume/About";
import { Education } from "@/components/resume/Education";
import { MainLayout } from "@/components/common/MainLayout";

export default function Resume() {
  return (
    <MainLayout>
      <Header />
      <ResumeLayout>
        <ResumeTitle myName={myData.name} />
        <MyInfo
          gitGubUrl={myData.git}
          email={myData.email}
          phone={myData.phone}
        />
        <About about={myData.about} />
        <WorkExperience companies={myData.companies} />
        <WorkExperienceDetail companies={myData.companies} />
        <Education educations={myData.educations} />
      </ResumeLayout>
    </MainLayout>
  );
}
