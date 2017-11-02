## This is an Android App that utilizes SqlLite and Geo Location

# Intended User Flow
	1. Landing Page with 
		- Input Text Form
		- Submit Button
		- the results table
	2. Prompted for Geolocation permissions
	3. If permissions granted, 
		-then 
			- save text value from input text form in a SqlLite Database
			- save the Geolocation in the same SqlLite entity
		- else
			- save text value from input text form in a SqlLite Database
			- return to landing page
	4. Inital Landing Page with new 'results' values in the SqlLite Database display table
		- list of all the rows of SqlLite Database entities (even those without Geolocation)
			- the text values and the Geolocation

	Note: SqlLite Database needs to be consistent even when sessions end.
