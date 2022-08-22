import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../redux/useTypeSelector';
import "./_Report.sass"

interface IReport {}

const Report: React.FC<IReport> = () => {

    const { report, loading, error } = useTypedSelector(state => state.form)

    if (loading) {
        return <h1>Loading ...</h1>
    }

    if (error) {
        return <h1>{error}</h1>
    }

    return(
        <div className='containerReports'>
            {report.map((report, index) => {
                return (
                    <div className='report' key={index}>
                        <div className="report_title">
                            {index+1}. {report.name}
                        </div>
                        <div></div>
                        <div className="report_subTitle">
                            {report.subTitle}
                        </div>
                        {
                            report.info.map((item, index) => {
                                return (
                                    <div className='report_data' key={index}>
                                        <div className='dataTitle'>
                                            {item.name}
                                        </div>
                                        <div className='dataValue'>
                                            <div className='textDataValue'>{item.value}{item.text}</div>
                                            <div className='viewDataValue'>
                                                <div className='viewDataValue_color' style={{width: `${(item.value / 100) * 100}%`}}/>
                                            </div>
                                        </div>

                                    </div>
                                )
                            })
                        }
                        
                    </div>
                )
            })}
        </div>
    )
}

export default Report;