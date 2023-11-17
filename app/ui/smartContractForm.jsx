"use client";
import React, { useState, useEffect } from 'react';

export default function SmartContractForm () {
    const [isLoading, setIsLoading] = useState(false);
    const [smartContractAddress, setSmartContractAddress] = useState('');
    const [isAnalyzing, setIsAnalyzing] = useState(false);
    const [analysisResult, setAnalysisResult] = useState('');
    const [showAnalysisResult, setShowAnalysisResult] = useState(false);

    return (
        <div >
          <div className="px-4 py-5 my-5 text-center">
            <h1 className="display-5 fw-bold text-body-emphasis"> AI-Powered Smart Contract Advisor</h1>
            <div className="col-lg-6 mx-auto">
              <p className="lead mb-4">Quickly get insights on smart contracts, just enter smart contract address and analyse</p>
             
              <div className="my-5 text-center">
            <input 
              type="text" 
              className="form-control" 
              placeholder="Smart Contract Address" 
              defaultValue={''}
            onChange={(e) => setSmartContractAddress(e.target.value)}
              aria-label="Smart Contract Address"
            />
            <button 
              type="button" 
              className="mybtn-main px-4 gap-3 mt-2"
            //   onClick={handleAnalyzeButtonClick}
              disabled={isAnalyzing}
            >
              {isAnalyzing ? 'Analyzing...' : 'Analyse'}
            </button>
    
            {/* {showAnalysisResult && (
              <div className="analysis-result">
                <ReactMarkdown>{analysisResult}</ReactMarkdown>
                <button onClick={() => closeAnalyis()} className='mybtn-main px-4 gap-3 mt-2 '>Close</button>
                
              </div>
            )} */}
          </div>
              
            </div>
          </div>
          {/* <div className="my-5 text-center">
                <h2 className="display-7 fw-bold text-body-emphasis"> Recently Deployed Smart Contracts</h2>
                {isLoading ? (
                  <p>Loading contracts...</p>
                ) : (
                  <SmartContractTable contracts={cdata} />
                )}
              </div> */}
         
        </div>
      )
}