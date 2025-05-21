import Hero_Section from "@/app/components/Hero_Section"
import About_Service_section from "@/app/components/About_Service_section";

const page = () => {
return (
    <>
       <Hero_Section
        title="Psychotherapie in Köln:"
        subtitle=""
        points={[
          "Einzel-, Gruppen- & Paartherapien",
          "Online-Therapie & Reha-Nachsorge für flexible Unterstützung",
          "Kurzfristige Termine, individuelle Beratung & Therapie-Konzepte",
        ]}
        buttonText=""
        buttonLink="/"
        imageSrc="/images/team-hero.png"
      />
     <About_Service_section
         title="Über Dr. Tristan Marhenke"
         description={[
          "Dr. phil. Tristan Marhenke ist Psychologe und approbierter Psychologischer Psychotherapeut mit der Fachkunde im Richtlinienverfahren Verhaltenstherapie. Er ist Mitglied der Psychotherapeutenkammer NRW und eingetragen in das Arztregister der Kassenärztlichen Vereinigung Nordrhein.",
         "Dr. Marhenke forscht und publiziert bei sexual- und paartherapeutischen Fragestellungen und ist zertifizierter Systemischer Paar- und Sexualtherapeut der Deutschen Gesellschaft für Sexualforschung (DGfS). Herr Dr. Marhenke engagiert sich sowohl in der studentischen Lehre an der Hochschule Fresenius als auch in der Ausbildung für PsychotherapeutInnen in Ausbildung für die Köln-Bonner Akademie für Verhaltenstherapie (kbav) und das Rhein-Eifel-Institut. Er ist seit 2016 in eigener Privat- und Kassenarztpraxis psychotherapeutische tätig."
        ]}
        listItems={[]}
        bgColor="bg-[#FFF2CE]"
        imageSrc="/images/team-member-1.png"
        reverse={false}
      />
    </>
)
}

export default page