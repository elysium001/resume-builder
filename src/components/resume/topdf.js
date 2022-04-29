import React, { useState } from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
import ReactHtmlParser from 'react-html-parser';

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#E4E4E4",
    padding: 16
  },
  row: {
    flexDirection: "row",
    marginBottom: 8,
  },
  column: {
    flexDirection: "column",
    marginBottom: 8
  },
});

// Create Document Component
const MyDocument = (props) => {
  const { resume = {} } = props;
  const [resumeObj] = useState(resume);
  const { name, title, address, phone, email, objective, workHistory, skills } =
    resumeObj;

  const colors = [
    "green",
    "blue",
    "yellow",
    "red",
    "cyan",
    "gray",
    "purple",
    "orange",
  ];

  const regularSize = '12';
  const lgSize = '24';
  const regularWeight = 'regular';
  const boldWeight = 'bold';

  const parseContent = (content) => {
    const parsedHtml = ReactHtmlParser(content);
    const type = parsedHtml.type;
    console.log(type)
    return parsedHtml
  }
    
  return (
    <Document>
      <Page object-fit="fill" size="A4" style={styles.page}>
        <View style={[styles.row,{fontSize: lgSize,fontWeight: boldWeight}]}>
          <Text>{name}</Text>
        </View>
        <View style={[styles.row,{fontSize: '18',fontWeight: regularWeight}]}>
          <Text>{title}</Text>
        </View>
        <View style={[styles.row,{fontSize: regularSize,fontWeight: regularWeight}]}>
          <Text>{address}</Text>
          <Text style={{marginHorizontal: 8}}>|</Text>
          <Text>{phone}</Text>
          <Text style={{marginHorizontal: 8}}>|</Text>
          <Text>{email}</Text>
        </View>
        <View style={[styles.row,{fontSize: '14',fontWeight: boldWeight}]}>
          <Text>Summary</Text>
        </View>
        <View style={[styles.row,{fontSize: regularSize,fontWeight: regularWeight}]}>
          <Text>{objective}</Text>
        </View>
        <View style={[styles.row,{fontSize: '14',fontWeight: boldWeight}]}>
          <Text>Work History</Text>
        </View>
          {workHistory &&
            workHistory.map(
              (
                { startDate, endDate, title, company, location, content },
                i
              ) => {
                return (
                  <div key={i}>
                    <View style={[styles.row,{fontSize: regularSize,fontWeight: regularWeight}]}>
                      <View style={[styles.column, {marginLeft: 0, marginRight: 10}]}>
                        <Text>
                          {startDate} - {endDate}
                        </Text>
                      </View>
                      <View style={[styles.column, {marginRight: 0}]}>
                        <View style={[styles.row,{fontSize: '14',fontWeight: boldWeight}]}>
                          <Text>{title}</Text>
                        </View>
                        <View style={[styles.row,{fontSize: regularSize, fontWeight: 'semibold'}]}>
                          <Text>{company}</Text>
                          <Text style={{marginHorizontal: 4}}>-</Text>
                          <Text style={{fontStyle: 'italic'}}>{location}</Text>
                        </View>
                        <View style={[styles.row,{fontSize: regularSize,fontWeight: regularWeight, width: 400}]}>
                          <Text>
                            {content && parseContent(content)}
                          </Text>
                        </View>
                      </View>
                    </View>
                    
                  </div>
                );
              }
            )}
        <View style={[styles.row,{fontSize: '14',fontWeight: boldWeight}]}>
          <Text>Skills</Text>
        </View>
        {skills &&
          skills.map(({ experience, name }, i) => {
            return (
              <View style={[styles.row,{fontSize: regularSize,fontWeight: regularWeight}]} key={i}>
                <Text>{name}</Text>
                <Text>
                  <div className="w-full bg-gray-200 rounded-full mb-2">
                    <div
                      className={`bg-${colors[i]}-600 text-xs font-medium text-${colors[i]}-100 text-center p-0.5 leading-none rounded-l-full`}
                      style={{ width: `${experience}%` }}
                    >
                      {" "}
                    </div>
                  </div>
                </Text>
              </View>
            );
          })}
      </Page>
    </Document>
  );
};

export default MyDocument;
