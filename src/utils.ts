import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export const exportPDF2 = (ref: HTMLDivElement | null) => {
  if (ref) {
    // const temp = cvRef.current;
    // temp.removeAttribute("class");
    html2canvas(ref).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const imgWidth = 210;
      const pageHeight = 297;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;

      const pdf = new jsPDF("p", "mm", "a4");
      let position = 0;

      pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }
      pdf.save("FarrahCV.pdf");
    });
  }
};

export const exportPDF3 = (ref: HTMLDivElement | null) => {
  if (ref) {
    // pdf.html(ref, {
    //   callback: (pdf) => {
    //     pdf.save("FarrahCV.pdf");
    //   },
    //   width: 794,
    //   windowWidth: 794,
    //   autoPaging: "slice",
    //   x: 10,
    //   y: 10,
    // });

    html2canvas(ref).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const imgWidth = 210;
      const pageHeight = 297;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;

      const pdf = new jsPDF({
        orientation: "p",
        unit: "mm",
        format: "a4",
        hotfixes: ["px_scaling"],
      });

      pdf.setProperties({
        title: "Farrah Lord-Newcombe CV",
        subject: "CV",
        author: "Farrah Lord-Newcombe",
        keywords: "react, jsPDF, bootstrap",
      });

      let position = 0;

      pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }
      pdf.save("FarrahCV.pdf");
    });
  }
};

export const generateAndSavePDF = async (source: HTMLIFrameElement) => {
  console.log("source: ", source);
  const pdf = new jsPDF("portrait", "mm", "a4");
  const data = await html2canvas(source);
  const img = data.toDataURL("image/png");
  const imgProperties = pdf.getImageProperties(img);
  const pdfWidth = pdf.internal.pageSize.getWidth();
  const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;

  pdf.addImage(img, "PNG", 0, 0, pdfWidth, pdfHeight);
  pdf.setProperties({
    title: "Farrah Lord-Newcombe CV",
    subject: "CV",
    author: "Farrah Lord-Newcombe",
    keywords: "react, jsPDF, bootstrap",
  });
  // pdf.html(source).then(() => {
  pdf.save("FarrahCV2.pdf");
  // });
};
