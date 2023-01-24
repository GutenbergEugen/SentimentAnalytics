import React from 'react'
import FileUploadSingle from '../../Components/FileUploadSingle'
import TextAnalysis from '../../Components/TextAnalysis'

export default function HomePage() {
  return (
    <div>
        <TextAnalysis />
        <FileUploadSingle />
    </div>
  )
}
