import Hero_Section from "@/app/components/Hero_Section"
import About_Service_section from "@/app/components/About_Service_section";

const page = async({params}) => {
  const {slug} = params
return (
  <>
    <Hero_Section
      title={
        slug === "tristan-marhenke"
          ? "Dr. Tristan Marhenke"
          : slug === "aida-marhenke"
          ? "M.Sc. Aida Marhenke"
          : "M.Sc. Roja Jansen"
      }
      subtitle=""
      points={
        slug === "tristan-marhenke"
          ? ["Psychologischer Psychotherapeut", "Praxisinhaber"]
          : slug === "aida-marhenke"
          ? ["Psychologische Psychotherapeutin"]
          : ["Psychologische Psychotherapeutin"]
      }
      buttonText=""
      buttonLink="/"
      imageSrc="/images/team-hero.png"
    />
    <About_Service_section
      title={`Über Dr. ${
        slug === "tristan-marhenke"
          ? "Dr. Tristan Marhenke"
          : slug === "aida-marhenke"
          ? "M.Sc. Aida Marhenke"
          : "M.Sc. Roja Jansen"
      }`}
      description={
        slug === "tristan-marhenke"
          ? [
              "Dr. phil. Tristan Marhenke ist Psychologe und approbierter Psychologischer Psychotherapeut mit der Fachkunde im Richtlinienverfahren Verhaltenstherapie. Er ist Mitglied der Psychotherapeutenkammer NRW und eingetragen in das Arztregister der Kassenärztlichen Vereinigung Nordrhein.",
              "Dr. Marhenke forscht und publiziert bei sexual- und paartherapeutischen Fragestellungen und ist zertifizierter Systemischer Paar- und Sexualtherapeut der Deutschen Gesellschaft für Sexualforschung (DGfS). Herr Dr. Marhenke engagiert sich sowohl in der studentischen Lehre an der Hochschule Fresenius als auch in der Ausbildung für PsychotherapeutInnen in Ausbildung für die Köln-Bonner Akademie für Verhaltenstherapie (kbav) und das Rhein-Eifel-Institut. Er ist seit 2016 in eigener Privat- und Kassenarztpraxis psychotherapeutische tätig.",
            ]
          : slug === "aida-marhenke"
          ? [
              "M.Sc. Aida Marhenke ist Psychologin und Psychotherapeutin mit der Fachkunde im Richtlinienverfahren Verhaltenstherapie. Sie verfügt über umfassende therapeutische Erfahrungen im klinisch-psychiatrischen und ambulanten Bereich. Unter anderem arbeitete sie als klinische Psychologin in der LVR-Klinik für Psychiatrie, Psychotherapie und Psychosomatik in Viersen und war tätig in der Allgemeinen Psychiatrie der LVR-Klinik in Düren.",
              "Aida Marhenke befindet sich in Weiterbildung zur Trauma-fokussierten Therapeutin und zeichnet sich durch eine wertschätzende und von Akzeptanz geprägt Grundhaltung aus.",
            ]
          : [
              "M.Sc. Roja Jansen ist Psychologin und approbierte psychologische Psychotherapeutin mit Fachkunde im Richtlinienverfahren Verhaltenstherapie. Sie ist Mitglied in der Psychotherapeutenkammer NRW und eingetragen in das Arztregister der kassenärztlichen Vereinigung Nordrhein.",
              "Frau Jansen verfügt über langjährige Erfahrung in der Psychosomatischen Rehabiliation und über umfassende therapeutische Kenntnisse im ambulanten sowie stationären Bereich.",
            ]
      }
      listItems={[]}
      bgColor="bg-[#FFF2CE]"
      imageSrc={
        slug === "tristan-marhenke"
          ? "/images/team-member-1.png"
          : slug === "aida-marhenke"
          ? "/images/team-member-2.png"
          : "/images/team-member-3.png"
      }
      reverse={false}
    />
  </>
);
}

export default page