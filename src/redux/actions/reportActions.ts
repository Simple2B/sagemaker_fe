import { Dispatch } from "redux";
import { IFormData, ReportAction, ReportActionTypes } from "../types/reportTypes";

const fakeResInfoData = [
  {
      name: "Short summary",
      subTitle: "Coming soon",
      info: [
          {
              name: "",
              value: 0,
              text: ''
          }
      ]
  },
  {
      name: "Related literature",
      subTitle: "Coming soon",
      info: [
          {
              name: "",
              value: 0,
              text: ''
          }
      ]
  },
  {
      name: "Recommended journals",
      subTitle: "",
      info: [
          {
              name: "Journal of XXX",
              value: 96,
              text: '% fit'
          },
          {
              name: "Journal of YYY",
              value: 90,
              text: '% fit'
          },
          {
              name: "Economics Journal of XXX",
              value: 87,
              text: '% fit'
          },
          {
              name: "American Review of XXX",
              value: 82,
              text: '% fit'
          },
          {
              name: "International Journal of XXX",
              value: 78,
              text: '% fit'
          },
      ]
  },
  {
      name: "Citations forecast",
      subTitle: "Relative to other papers in the same field published in the same year",
      info: [
          {
              name: "Top 5% of citations",
              value: 50,
              text: '% probability'
          },
          {
              name: "Top 10% - Top 5% of citations",
              value: 30,
              text: '% probability'
          },
          {
              name: "Top 25% - Top 10% of citations",
              value: 11,
              text: '% probability'
          },
          {
              name: "Top 50% - Top 25% of citations",
              value: 8,
              text: '% probability'
          },
          {
              name: "Bottom 50% of citations",
              value: 1,
              text: '% probability'
          },
      ]
  },
  {
      name: "Index of paper novelty",
      subTitle: "Coming soon",
      info: [
          {
              name: "",
              value: 0,
              text: ''
          }
      ]
  },
]

export const fetchReport = (formData: IFormData) => {
  return async (dispatch: Dispatch<ReportAction>) => {
    try {
        console.log("fetchReport: formData => ", formData);
        
        dispatch({type: ReportActionTypes.FETCH_REPORT})
        // const response = await reportApi.sendFormData(formData)
        // you must put to payload => response.data (created report from back)

        // for example reloading data use setTimeout
        setTimeout(() => {
            dispatch({type: ReportActionTypes.FETCH_REPORT_SUCCESS, payload: fakeResInfoData})
        }, 2000)
    } catch (e) {
        dispatch({
            type: ReportActionTypes.FETCH_REPORT_ERROR, 
            payload: 'Error loading report'
        })
    }
  }
}
