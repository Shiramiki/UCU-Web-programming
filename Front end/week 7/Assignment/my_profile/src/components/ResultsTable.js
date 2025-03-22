const ResultsTable = () => {
    const results = [
        { courseCode: 'ICT1102', courseTitle: 'Essential Hardware and Software Concepts', grade: 5, courseCredits: 4 },
        { courseCode: 'ICT1103', courseTitle: 'Fundamentals of Computing', grade: 5, courseCredits: 4 },
        { courseCode: 'CSC1101', courseTitle: 'Structured Programming', grade: 4, courseCredits: 5 },
        { courseCode: 'LNG1101', courseTitle: 'Writing and Study Skills', grade: 5, courseCredits: 3 },
        { courseCode: 'TBS1103', courseTitle: 'Understanding the Old Testament', grade: 5, courseCredits: 3 },
      ];
    return (
        <table border="1">
            <thead>
                <tr>
                    <th>Course Code</th>
                    <th>Course Title</th>
                    <th>Grade</th>
                    <th>Course Credits</th> 
                </tr>
            </thead>
            <tbody>
                {results.map((result) => (
                    <tr key={result.courseCode}>
                        <td>{result.courseCode}</td>
                        <td>{result.courseTitle}</td>
                        <td>{result.grade}</td>
                        <td>{result.courseCredits}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default ResultsTable;
