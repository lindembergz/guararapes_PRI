import {MigrationInterface, QueryRunner} from "typeorm";

export class migracao31615033078811 implements MigrationInterface {
    name = 'migracao31615033078811'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `species` CHANGE `Id` `id` int NOT NULL AUTO_INCREMENT");
        await queryRunner.query("ALTER TABLE `starships` CHANGE `Id` `id` int NOT NULL AUTO_INCREMENT");
        await queryRunner.query("ALTER TABLE `vehicles` CHANGE `Id` `id` int NOT NULL AUTO_INCREMENT");
        await queryRunner.query("ALTER TABLE `people` CHANGE `Id` `id` int NOT NULL AUTO_INCREMENT");
        await queryRunner.query("ALTER TABLE `planets` CHANGE `Id` `id` int NOT NULL AUTO_INCREMENT");
        await queryRunner.query("ALTER TABLE `films` CHANGE `Id` `id` int NOT NULL AUTO_INCREMENT");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `films` CHANGE `id` `Id` int NOT NULL AUTO_INCREMENT");
        await queryRunner.query("ALTER TABLE `planets` CHANGE `id` `Id` int NOT NULL AUTO_INCREMENT");
        await queryRunner.query("ALTER TABLE `people` CHANGE `id` `Id` int NOT NULL AUTO_INCREMENT");
        await queryRunner.query("ALTER TABLE `vehicles` CHANGE `id` `Id` int NOT NULL AUTO_INCREMENT");
        await queryRunner.query("ALTER TABLE `starships` CHANGE `id` `Id` int NOT NULL AUTO_INCREMENT");
        await queryRunner.query("ALTER TABLE `species` CHANGE `id` `Id` int NOT NULL AUTO_INCREMENT");
    }

}
