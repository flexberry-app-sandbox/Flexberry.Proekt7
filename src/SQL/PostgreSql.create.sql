﻿




CREATE TABLE СправСотр (
 primaryKey UUID NOT NULL,
 Фио VARCHAR(255) NULL,
 СправДолж UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ПриходУход (
 primaryKey UUID NOT NULL,
 ВрПриУх VARCHAR(255) NULL,
 Статус VARCHAR(5) NULL,
 СправУч UUID NOT NULL,
 Расписание UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Ученик (
 primaryKey UUID NOT NULL,
 ПриходУход UUID NOT NULL,
 Просмотр UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE СправДолж (
 primaryKey UUID NOT NULL,
 Должность VARCHAR(255) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE КлассУч (
 primaryKey UUID NOT NULL,
 Назв VARCHAR(255) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Номер (
 primaryKey UUID NOT NULL,
 Наименование INT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ТчМестоУч (
 primaryKey UUID NOT NULL,
 СправУч UUID NOT NULL,
 МестоУч UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE МестоУч (
 primaryKey UUID NOT NULL,
 СправСотр UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE СправРод (
 primaryKey UUID NOT NULL,
 Фио VARCHAR(255) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE СправУч (
 primaryKey UUID NOT NULL,
 ДатаРожд TIMESTAMP(3) NULL,
 Фио VARCHAR(255) NULL,
 КлассУч UUID NOT NULL,
 СправРод UUID NOT NULL,
 Номер UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Расписание (
 primaryKey UUID NOT NULL,
 ПериодОт VARCHAR(255) NULL,
 ПериодДо VARCHAR(255) NULL,
 Урок VARCHAR(255) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Просмотр (
 primaryKey UUID NOT NULL,
 Время TIMESTAMP(3) NULL,
 СправРод UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMNETLOCKDATA (
 LockKey VARCHAR(300) NOT NULL,
 UserName VARCHAR(300) NOT NULL,
 LockDate TIMESTAMP(3) NULL,
 PRIMARY KEY (LockKey));


CREATE TABLE STORMSETTINGS (
 primaryKey UUID NOT NULL,
 Module VARCHAR(1000) NULL,
 Name VARCHAR(255) NULL,
 Value TEXT NULL,
 "User" VARCHAR(255) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMAdvLimit (
 primaryKey UUID NOT NULL,
 "User" VARCHAR(255) NULL,
 Published BOOLEAN NULL,
 Module VARCHAR(255) NULL,
 Name VARCHAR(255) NULL,
 Value TEXT NULL,
 HotKeyData INT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMFILTERSETTING (
 primaryKey UUID NOT NULL,
 Name VARCHAR(255) NOT NULL,
 DataObjectView VARCHAR(255) NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMWEBSEARCH (
 primaryKey UUID NOT NULL,
 Name VARCHAR(255) NOT NULL,
 "Order" INT NOT NULL,
 PresentView VARCHAR(255) NOT NULL,
 DetailedView VARCHAR(255) NOT NULL,
 FilterSetting_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMFILTERDETAIL (
 primaryKey UUID NOT NULL,
 Caption VARCHAR(255) NOT NULL,
 DataObjectView VARCHAR(255) NOT NULL,
 ConnectMasterProp VARCHAR(255) NOT NULL,
 OwnerConnectProp VARCHAR(255) NULL,
 FilterSetting_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMFILTERLOOKUP (
 primaryKey UUID NOT NULL,
 DataObjectType VARCHAR(255) NOT NULL,
 Container VARCHAR(255) NULL,
 ContainerTag VARCHAR(255) NULL,
 FieldsToView VARCHAR(255) NULL,
 FilterSetting_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE UserSetting (
 primaryKey UUID NOT NULL,
 AppName VARCHAR(256) NULL,
 UserName VARCHAR(512) NULL,
 UserGuid UUID NULL,
 ModuleName VARCHAR(1024) NULL,
 ModuleGuid UUID NULL,
 SettName VARCHAR(256) NULL,
 SettGuid UUID NULL,
 SettLastAccessTime TIMESTAMP(3) NULL,
 StrVal VARCHAR(256) NULL,
 TxtVal TEXT NULL,
 IntVal INT NULL,
 BoolVal BOOLEAN NULL,
 GuidVal UUID NULL,
 DecimalVal DECIMAL(20,10) NULL,
 DateTimeVal TIMESTAMP(3) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ApplicationLog (
 primaryKey UUID NOT NULL,
 Category VARCHAR(64) NULL,
 EventId INT NULL,
 Priority INT NULL,
 Severity VARCHAR(32) NULL,
 Title VARCHAR(256) NULL,
 Timestamp TIMESTAMP(3) NULL,
 MachineName VARCHAR(32) NULL,
 AppDomainName VARCHAR(512) NULL,
 ProcessId VARCHAR(256) NULL,
 ProcessName VARCHAR(512) NULL,
 ThreadName VARCHAR(512) NULL,
 Win32ThreadId VARCHAR(128) NULL,
 Message VARCHAR(2500) NULL,
 FormattedMessage TEXT NULL,
 PRIMARY KEY (primaryKey));



 ALTER TABLE СправСотр ADD CONSTRAINT FK16b7a5f6f06361e4bff31f21b8567463326ad9f9 FOREIGN KEY (СправДолж) REFERENCES СправДолж; 
CREATE INDEX Index16b7a5f6f06361e4bff31f21b8567463326ad9f9 on СправСотр (СправДолж); 

 ALTER TABLE ПриходУход ADD CONSTRAINT FKb600a2fafea0b7b25bf7e8491e74871a22ede53c FOREIGN KEY (СправУч) REFERENCES СправУч; 
CREATE INDEX Indexb600a2fafea0b7b25bf7e8491e74871a22ede53c on ПриходУход (СправУч); 

 ALTER TABLE ПриходУход ADD CONSTRAINT FK1b6262cd0c1cbb5a2168a2783c31c157c94723fd FOREIGN KEY (Расписание) REFERENCES Расписание; 
CREATE INDEX Index1b6262cd0c1cbb5a2168a2783c31c157c94723fd on ПриходУход (Расписание); 

 ALTER TABLE Ученик ADD CONSTRAINT FK24b0ab1624aa4f7b3ebbf0295add22504c43fe87 FOREIGN KEY (ПриходУход) REFERENCES ПриходУход; 
CREATE INDEX Index24b0ab1624aa4f7b3ebbf0295add22504c43fe87 on Ученик (ПриходУход); 

 ALTER TABLE Ученик ADD CONSTRAINT FKd607c538d2fe320f873ff679904eb28b1e837e57 FOREIGN KEY (Просмотр) REFERENCES Просмотр; 
CREATE INDEX Indexd607c538d2fe320f873ff679904eb28b1e837e57 on Ученик (Просмотр); 

 ALTER TABLE ТчМестоУч ADD CONSTRAINT FKc0e89af1d4a15b8e4f92ecac446594b298333c02 FOREIGN KEY (СправУч) REFERENCES СправУч; 
CREATE INDEX Indexc0e89af1d4a15b8e4f92ecac446594b298333c02 on ТчМестоУч (СправУч); 

 ALTER TABLE ТчМестоУч ADD CONSTRAINT FK4ed11df511b18fb2dcb66ceed0c603f6a1e9d79e FOREIGN KEY (МестоУч) REFERENCES МестоУч; 
CREATE INDEX Index4ed11df511b18fb2dcb66ceed0c603f6a1e9d79e on ТчМестоУч (МестоУч); 

 ALTER TABLE МестоУч ADD CONSTRAINT FK1dd84bffe760bdff1948ae4a424eb71511ab627a FOREIGN KEY (СправСотр) REFERENCES СправСотр; 
CREATE INDEX Index1dd84bffe760bdff1948ae4a424eb71511ab627a on МестоУч (СправСотр); 

 ALTER TABLE СправУч ADD CONSTRAINT FKa68295ddc783f297389148f0d145237efa03c770 FOREIGN KEY (КлассУч) REFERENCES КлассУч; 
CREATE INDEX Indexa68295ddc783f297389148f0d145237efa03c770 on СправУч (КлассУч); 

 ALTER TABLE СправУч ADD CONSTRAINT FK192ae19f451f875eaba064911f68eebadadc10af FOREIGN KEY (СправРод) REFERENCES СправРод; 
CREATE INDEX Index192ae19f451f875eaba064911f68eebadadc10af on СправУч (СправРод); 

 ALTER TABLE СправУч ADD CONSTRAINT FKe11f140634cb453c90d1eabf51d0de7607096f76 FOREIGN KEY (Номер) REFERENCES Номер; 
CREATE INDEX Indexe11f140634cb453c90d1eabf51d0de7607096f76 on СправУч (Номер); 

 ALTER TABLE Просмотр ADD CONSTRAINT FKc96480fe58a15b16e698b0443ff6a9dd407b815e FOREIGN KEY (СправРод) REFERENCES СправРод; 
CREATE INDEX Indexc96480fe58a15b16e698b0443ff6a9dd407b815e on Просмотр (СправРод); 

 ALTER TABLE STORMWEBSEARCH ADD CONSTRAINT FKc4378e39870eb056aec84088683297a01d2a6200 FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

 ALTER TABLE STORMFILTERDETAIL ADD CONSTRAINT FK921d16269835017e2a0d0e29ad6fb175454a70d0 FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

 ALTER TABLE STORMFILTERLOOKUP ADD CONSTRAINT FKce38ef0db3f01a53acaa49fed8853fb941ad47ba FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

