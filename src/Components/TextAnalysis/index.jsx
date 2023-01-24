import React from 'react';
import s from './index.module.css';
// import FileUploadSingle from '../FileUploadSingle';

export default function TextAnalysis() {
  return (
    <div className={s.text_block}>
      <p>Title</p>
      <form className={s.text_form}>
        <div className={s.info_block}>
          <div className={s.input_text_block} >
            <h3>Enter your text for analysis</h3>
            <textarea type="text" />
          </div>
          <div>
            <h3>Results</h3>
            <p className={s.results_text}>Positive 65%</p>
          </div>
        </div>
        <div>
          {/* <FileUploadSingle /> */}
        </div>
        <button>Alanyze Text</button>
      </form>


    </div>
  )
}
