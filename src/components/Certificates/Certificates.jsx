import React, { useEffect, useState } from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import goo from "./WebDev-Certificates/goo.pdf";
import micro from "./WebDev-Certificates/micro.pdf";
import reactLetsUpgrade from "./WebDev-Certificates/react.js certificate lets upgrade.pdf";
import node from "./WebDev-Certificates/certificate for node.pdf";
import devtown from "./WebDev-Certificates/devtown.pdf";
import flutter from "./WebDev-Certificates/flutter.pdf";
import "./Certificates.css";
import HashLoader from "react-spinners/HashLoader";

const pdfArr = [
  {
    key: "React JS from Lets Upgrade",
    value: reactLetsUpgrade,
    url: "https://verify.letsupgrade.in/certificate/LUERJSAUG122327",
  },
  {
    key: "Node JS from Google",
    value: goo,
    url: "https://cert.devtown.in/verify/Z29JMqd",
  },
  {
    key: "Node JS from Microsoft",
    value: micro,
    url: "https://cert.devtown.in/verify/Z1vE8vh",
  },
  {
    key: "Node JS from Lets Upgrade",
    value: node,
    url: "https://verify.letsupgrade.in/certificate/LUENJSAUG122111",
  },
  {
    key: "Node JS from DevTown",
    value: devtown,
    url: "https://cert.devtown.in/verify/27J9Jr",
  },
  {
    key: "Flutter from Lets Upgrade",
    value: flutter,
    url: "https://verify.letsupgrade.in/certificate/LUEFSEP122373",
  },
];

export const Certificates = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  return (
    <div>
      {loading ? (
        <div className="loader">
          <HashLoader color="#DC143C" size={60} loading={loading} />
        </div>
      ) : (
        <div className="certificates-sec">
          <section id="certificates">
            <h1 className="headings">certificates</h1>
            {pdfArr.map((p, index) => {
              return (
                <div className="certi">
                  <h2>
                    {" "}
                    {index + 1 + "."} {p.key}
                  </h2>
                  <Document
                    key={index}
                    className="doc"
                    file={p.value}
                    onLoadSuccess={onDocumentLoadSuccess}
                  >
                    <Page
                      height="200"
                      className="page"
                      pageNumber={pageNumber}
                      renderTextLayer={false}
                      renderInteractiveForms={false}
                    />
                  </Document>
                  <button className="btn">
                    <a href={p.url} target="nt">
                      check it out
                    </a>
                  </button>
                  {/* <p>
                    Page {pageNumber} of {numPages}
                  </p> */}
                </div>
              );
            })}
          </section>
        </div>
      )}
    </div>
  );
};
