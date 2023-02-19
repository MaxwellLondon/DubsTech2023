-- schema creation
/*
CREATE TABLE crime (
	ReportNumber VARCHAR(100) PRIMARY KEY,
	OccuredDate VARCHAR(50),
	ReportedDate VARCHAR(50),
	ReportedTime VARCHAR(30),
	CrimeSubcategory VARCHAR(100),
	PrimaryOffenseDescription VARCHAR(100),
	Precinct VARCHAR(100),
	Sector VARCHAR(30),
	Beat VARCHAR(30),
	MCPP VARCHAR(100),
	100Block VARCHAR(100),
	Longitude VARCHAR(50),
	Latitude VARCHAR(50)
);
*/
-- replace w your path
BULK INSERT crime
FROM "C:\Users\drose\Downloads\d4\cleanedSPDData.csv";