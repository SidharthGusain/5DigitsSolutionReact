import React from "react";

export default function NoPage() {
  return (
    <>
      <section className="page_404_header"></section>
      
      <section className="page_404">
        <div className="container">
          <div className="row">
            <div className="col-sm-10 offset-sm-1 text-center">
                <div className="four-zero-four-title">
                  <h1 className="text-center ">404</h1>
                </div>
                <div className="four_zero_four_bg"></div>

                <div className="contant_box_404">
                  <h3>Look like you're lost</h3>

                  <p>the page you are looking for is not avaible!</p>
                </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
