module.exports = (sequelize, DataTypes) => {
    const Home = sequelize.define('Home', {
      namehome: DataTypes.STRING,
      peoplehome: DataTypes.STRING
      
      
    })
    return Home
}