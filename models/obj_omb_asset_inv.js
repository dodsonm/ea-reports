/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	var objOmbAssetInv = sequelize.define('objOmbAssetInv', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			field: 'Id'
		},
		relatedPrograms: {
			type: DataTypes.STRING,
			allowNull: true,
			defaultValue: "TBD",
			field: 'Related_Programs'
		},
		gotsOrCots: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'GOTS_or_COTS'
		},
		majorTechRefreshDate: {
			type: DataTypes.STRING,
			allowNull: true,
			defaultValue: "TBD",
			field: 'Major_Tech_Refresh_Date'
		},
		anticipatedRetirementDatel: {
			type: DataTypes.STRING,
			allowNull: true,
			defaultValue: "TBD",
			field: 'Anticipated_Retirement_Datel'
		},
		dataCenter: {
			type: DataTypes.STRING,
			allowNull: true,
			defaultValue: "TBD",
			field: 'Data_Center'
		},
		contractedSupport: {
			type: DataTypes.STRING,
			allowNull: true,
			defaultValue: "TBD",
			field: 'Contracted_Support'
		},
		endOfSupportDate: {
			type: DataTypes.STRING,
			allowNull: true,
			defaultValue: "TBD",
			field: 'End_of_Support_Date'
		},
		ediCrossReference: {
			type: DataTypes.STRING,
			allowNull: true,
			defaultValue: "TBD",
			field: 'EDI_Cross_Reference'
		},
		applicationInterfaceCode: {
			type: DataTypes.STRING,
			allowNull: true,
			defaultValue: "TBD",
			field: 'Application_Interface_Code'
		},
		fdcciInformation: {
			type: DataTypes.STRING,
			allowNull: true,
			defaultValue: "TBD",
			field: 'FDCCI_Information'
		},
		fedRampApprovedDate: {
			type: DataTypes.STRING,
			allowNull: true,
			defaultValue: "TBD",
			field: 'FedRAMP_Approved_Date'
		},
		riskManagement: {
			type: DataTypes.STRING,
			allowNull: true,
			defaultValue: "TBD",
			field: 'Risk_Management'
		},
		createDtg: {
			type: DataTypes.TIME,
			allowNull: false,
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
			field: 'CreateDTG'
		},
		changeDtg: {
			type: DataTypes.TIME,
			allowNull: false,
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
			field: 'ChangeDTG'
		},
		createAudit: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'CreateAudit'
		},
		changeAudit: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'ChangeAudit'
		},
		objApplicationId: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'obj_application',
				key: 'Id'
			},
			field: 'obj_application_Id'
		},
		objPocId: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'obj_poc',
				key: 'Id'
			},
			field: 'obj_poc_Id'
		}
	}, {
		timestamps: false,
		tableName: 'obj_omb_asset_inv'
	});
	return objOmbAssetInv;
};
