module.exports = (sequelize, DataTypes) => {
	return sequelize.define('product', {
		id: { type: DataTypes.SMALLINT, primaryKey: true },
		name: { type: DataTypes.STRING(100), allowNull: false },
		description: { type: DataTypes.STRING(700), allowNull: false },
		price: { type: DataTypes.REAL, allowNull: false },
		discount: { type: DataTypes.REAL, allowNull: false },
		photo_url: { type: DataTypes.STRING(300), allowNull: false }
	}, {
		timestamps: false
	});
}