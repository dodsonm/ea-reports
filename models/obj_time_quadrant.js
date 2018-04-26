/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	const TIMESTAMP = require('sequelize-mysql-timestamp')(sequelize);
	var timeQuadrant = sequelize.define('timeQuadrant', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'Id'
		},
		keyname: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'Keyname'
		},
		createDtg: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: TIMESTAMP,
			field: 'CreateDTG'
		},
		changeDtg: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: TIMESTAMP,
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
		}
	}, {
		timestamps: false,
		tableName: 'obj_time_quadrant'
	});
	return timeQuadrant;
};
