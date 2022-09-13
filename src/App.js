import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFViewer,
} from "@react-pdf/renderer";
// Create styles
const styles = StyleSheet.create({
  page: {
    backgroundColor: "white",
    color: "black",
    textAlign: "center",
    margin: 20,
  },
  subheader: {
    fontSize: 12,
    marginTop: 8,
    height: 100,
  },
  tablename: {
    fontSize: 12,
  },
  table: {
    width: "100%",
    borderWidth: "none",
    display: "flex",
    flexDirection: "column",
    border: "red",
    fontSize: 10,
  },
  header: {
    borderBottom: "2px solid black",
    margin: 20,
  },
  row: {
    display: "flex",
    flexDirection: "row",
    paddingTop: 8,
    paddingBottom: 8,
  },
  bold: {
    fontWeight: "bold",
  },
  // So Declarative and unDRY 👌
  row1: {
    width: "30%",
  },
  row2: {
    width: "70%",
  },
  cell: {
    borderWidth: 1,
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    textAlign: "center",
    flexWrap: "wrap",
  },
  viewer: {
    width: window.innerWidth, //the pdf viewer will take up all of the width and height
    height: window.innerHeight,
  },
});

// Create Document Component
function BasicDocument() {
  return (
    <PDFViewer style={styles.viewer}>
      {/* Start of the document*/}
      <Document>
        {/*render a single page*/}
        <Page size="A4" style={styles.page}>
          <View style={styles.section}>
            <Text>Tres Hermanas Motors Corp</Text>
            <View style={styles.subheader}>
              <Text>370 10th Avenue East, Grace Park, Caloocan City</Text>
              <Text>Tel. Nos.: 366-7864 to 67 | Fax No.: 366-7865</Text>
              <Text>Vat Reg. TIN 005-468-621-000</Text>
            </View>
          </View>
          <View style={styles.tablename}>
            <Text style={styles.bold}>Brand List</Text>
          </View>
          <View style={styles.table}>
            <View style={[styles.row, styles.bold, styles.header]}>
              <Text style={styles.row1}>ID</Text>
              <Text style={styles.row2}>Name</Text>
            </View>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
}
export default BasicDocument;
