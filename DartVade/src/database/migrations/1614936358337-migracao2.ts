import {MigrationInterface, QueryRunner} from "typeorm";

export class migracao21614936358337 implements MigrationInterface {
    name = 'migracao21614936358337'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `films` DROP COLUMN `episode_id`");
        await queryRunner.query("ALTER TABLE `films` ADD `episode_id` int NOT NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `films` DROP COLUMN `episode_id`");
        await queryRunner.query("ALTER TABLE `films` ADD `episode_id` double NOT NULL");
    }

}
