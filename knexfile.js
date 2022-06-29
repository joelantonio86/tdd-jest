// eslint-disable-next-line no-undef
module.exports = {
    test: {
        client: 'pg',
        version: '14.4.1',
        connection: {
            host: 'localhost',
            user: 'postgres',
            password: 'local',
            database: 'barriga',
        },
        migrations: {
            directory: 'src/migrations',
        },
    },
};
