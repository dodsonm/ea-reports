/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	const TIMESTAMP = require('sequelize-mysql-timestamp')(sequelize);
	var objApplicationRationalization = sequelize.define('objApplicationRationalization', {
		objApplicationId: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			references: {
				model: 'obj_application',
				key: 'Id'
			},
			field: 'obj_application_Id'
		},
		fy: {
			type: "YEAR(4)",
			allowNull: false,
			primaryKey: true,
			field: 'FY'
		},
		timeVal: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'TIME_Val'
		},
		comment: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'Comment'
		},
		createDtg: {
			type: DataTypes.TIME,
			allowNull: false,
			defaultValue: TIMESTAMP,
			field: 'CreateDTG'
		},
		changeDtg: {
			type: DataTypes.TIME,
			allowNull: false,
			defaultValue: TIMESTAMP,
			field: 'ChangeDTG'
		},
		createAudit: {
			type: DataTypes.STRING,
			allowNull: true,
			defaultValue: "Admin",
			field: 'CreateAudit'
		},
		changeAudit: {
			type: DataTypes.STRING,
			allowNull: true,
			defaultValue: "Admin",
			field: 'ChangeAudit'
		}
	}, {
		timestamps: false,
		tableName: 'obj_application_rationalization'
	});
	return objApplicationRationalization;
};