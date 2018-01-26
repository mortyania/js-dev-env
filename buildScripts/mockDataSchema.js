//	fake schema to produce data as if it is stored in a database

export const schema = {
	//	what the databse is responding with, in this case an object
	"type" : "object",
	//the properties of this object:
	"properties" : {
		//it contains users
		"users": {
			//each user is an array, and will be from 3 to 5 objects in length
			"type" : "array",
			"minItems" : 3,
			"maxItems" : 5,
			"items" : {
				//each item in the array is an object, and has it's own properties
				"type" : "object",
				"properties" : {
					//id number, has a minimum of 1 so it cannot be negative
					"id" : {
						"type" : "number",
						"unique" : true,
						"minimum" : 1
					},
					//the faker syntax is used by faker.js and simulates data strings
					"firstName" : {
						"type" : "string",
						"faker" : "name.firstName"
					},
					"lastName" : {
						"type" : "string",
						"faker" : "name.lastName"
					},
					"email" : {
						"type": "string",
						"faker" : "internet.email"
					}
				},
				//which of the properties within each item will be responded with every time
				required: ['id', 'firstName', 'lastName', 'email']
			}
		}
	},
	//which of the properties within the schema will be responded with every time
	required: ['users']
}
