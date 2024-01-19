



CREATE TABLE "СправСотр"
(

	"primaryKey" RAW(16) NOT NULL,

	"Фио" NVARCHAR2(255) NULL,

	"КлассУч" RAW(16) NOT NULL,

	"СправДолж" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ПриходУход"
(

	"primaryKey" RAW(16) NOT NULL,

	"ВрПриУх" NVARCHAR2(255) NULL,

	"Статус" NVARCHAR2(5) NULL,

	"СправУч" RAW(16) NOT NULL,

	"Расписание" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Ученик"
(

	"primaryKey" RAW(16) NOT NULL,

	"ПриходУход" RAW(16) NOT NULL,

	"Просмотр" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "СправДолж"
(

	"primaryKey" RAW(16) NOT NULL,

	"Должность" NVARCHAR2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "КлассУч"
(

	"primaryKey" RAW(16) NOT NULL,

	"Назв" NVARCHAR2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Номер"
(

	"primaryKey" RAW(16) NOT NULL,

	"Наименование" NUMBER(10) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ТчМестоУч"
(

	"primaryKey" RAW(16) NOT NULL,

	"СправУч" RAW(16) NOT NULL,

	"МестоУч" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "МестоУч"
(

	"primaryKey" RAW(16) NOT NULL,

	"СправСотр" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "СправРод"
(

	"primaryKey" RAW(16) NOT NULL,

	"Фио" NVARCHAR2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "СправУч"
(

	"primaryKey" RAW(16) NOT NULL,

	"ДатаРожд" DATE NULL,

	"Фио" NVARCHAR2(255) NULL,

	"КлассУч" RAW(16) NOT NULL,

	"СправРод" RAW(16) NOT NULL,

	"Номер" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Расписание"
(

	"primaryKey" RAW(16) NOT NULL,

	"ПериодОт" NVARCHAR2(255) NULL,

	"ПериодДо" NVARCHAR2(255) NULL,

	"Урок" NVARCHAR2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Просмотр"
(

	"primaryKey" RAW(16) NOT NULL,

	"Время" DATE NULL,

	"СправРод" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMNETLOCKDATA"
(

	"LockKey" NVARCHAR2(300) NOT NULL,

	"UserName" NVARCHAR2(300) NOT NULL,

	"LockDate" DATE NULL,

	 PRIMARY KEY ("LockKey")
) ;


CREATE TABLE "STORMSETTINGS"
(

	"primaryKey" RAW(16) NOT NULL,

	"Module" nvarchar2(1000) NULL,

	"Name" nvarchar2(255) NULL,

	"Value" CLOB NULL,

	"User" nvarchar2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMAdvLimit"
(

	"primaryKey" RAW(16) NOT NULL,

	"User" nvarchar2(255) NULL,

	"Published" NUMBER(1) NULL,

	"Module" nvarchar2(255) NULL,

	"Name" nvarchar2(255) NULL,

	"Value" CLOB NULL,

	"HotKeyData" NUMBER(10) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERSETTING"
(

	"primaryKey" RAW(16) NOT NULL,

	"Name" nvarchar2(255) NOT NULL,

	"DataObjectView" nvarchar2(255) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMWEBSEARCH"
(

	"primaryKey" RAW(16) NOT NULL,

	"Name" nvarchar2(255) NOT NULL,

	"Order" NUMBER(10) NOT NULL,

	"PresentView" nvarchar2(255) NOT NULL,

	"DetailedView" nvarchar2(255) NOT NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERDETAIL"
(

	"primaryKey" RAW(16) NOT NULL,

	"Caption" nvarchar2(255) NOT NULL,

	"DataObjectView" nvarchar2(255) NOT NULL,

	"ConnectMasterProp" nvarchar2(255) NOT NULL,

	"OwnerConnectProp" nvarchar2(255) NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERLOOKUP"
(

	"primaryKey" RAW(16) NOT NULL,

	"DataObjectType" nvarchar2(255) NOT NULL,

	"Container" nvarchar2(255) NULL,

	"ContainerTag" nvarchar2(255) NULL,

	"FieldsToView" nvarchar2(255) NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "UserSetting"
(

	"primaryKey" RAW(16) NOT NULL,

	"AppName" nvarchar2(256) NULL,

	"UserName" nvarchar2(512) NULL,

	"UserGuid" RAW(16) NULL,

	"ModuleName" nvarchar2(1024) NULL,

	"ModuleGuid" RAW(16) NULL,

	"SettName" nvarchar2(256) NULL,

	"SettGuid" RAW(16) NULL,

	"SettLastAccessTime" DATE NULL,

	"StrVal" nvarchar2(256) NULL,

	"TxtVal" CLOB NULL,

	"IntVal" NUMBER(10) NULL,

	"BoolVal" NUMBER(1) NULL,

	"GuidVal" RAW(16) NULL,

	"DecimalVal" NUMBER(20,10) NULL,

	"DateTimeVal" DATE NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ApplicationLog"
(

	"primaryKey" RAW(16) NOT NULL,

	"Category" nvarchar2(64) NULL,

	"EventId" NUMBER(10) NULL,

	"Priority" NUMBER(10) NULL,

	"Severity" nvarchar2(32) NULL,

	"Title" nvarchar2(256) NULL,

	"Timestamp" DATE NULL,

	"MachineName" nvarchar2(32) NULL,

	"AppDomainName" nvarchar2(512) NULL,

	"ProcessId" nvarchar2(256) NULL,

	"ProcessName" nvarchar2(512) NULL,

	"ThreadName" nvarchar2(512) NULL,

	"Win32ThreadId" nvarchar2(128) NULL,

	"Message" nvarchar2(2000) NULL,

	"FormattedMessage" nvarchar2(2000) NULL,

	 PRIMARY KEY ("primaryKey")
) ;



ALTER TABLE "СправСотр"
	ADD CONSTRAINT "СправСотр_FКл_7258" FOREIGN KEY ("КлассУч") REFERENCES "КлассУч" ("primaryKey");

CREATE INDEX "СправСотр_IКл_8396" on "СправСотр" ("КлассУч");

ALTER TABLE "СправСотр"
	ADD CONSTRAINT "СправСотр_FСп_8900" FOREIGN KEY ("СправДолж") REFERENCES "СправДолж" ("primaryKey");

CREATE INDEX "СправСотр_IСп_1094" on "СправСотр" ("СправДолж");

ALTER TABLE "ПриходУход"
	ADD CONSTRAINT "ПриходУход_FС_5275" FOREIGN KEY ("СправУч") REFERENCES "СправУч" ("primaryKey");

CREATE INDEX "ПриходУход_IС_5526" on "ПриходУход" ("СправУч");

ALTER TABLE "ПриходУход"
	ADD CONSTRAINT "ПриходУход_FР_2096" FOREIGN KEY ("Расписание") REFERENCES "Расписание" ("primaryKey");

CREATE INDEX "ПриходУход_IР_7253" on "ПриходУход" ("Расписание");

ALTER TABLE "Ученик"
	ADD CONSTRAINT "Ученик_FПрихо_9929" FOREIGN KEY ("ПриходУход") REFERENCES "ПриходУход" ("primaryKey");

CREATE INDEX "Ученик_IПрихо_7417" on "Ученик" ("ПриходУход");

ALTER TABLE "Ученик"
	ADD CONSTRAINT "Ученик_FПросм_5666" FOREIGN KEY ("Просмотр") REFERENCES "Просмотр" ("primaryKey");

CREATE INDEX "Ученик_IПросмотр" on "Ученик" ("Просмотр");

ALTER TABLE "ТчМестоУч"
	ADD CONSTRAINT "ТчМестоУч_FСп_6956" FOREIGN KEY ("СправУч") REFERENCES "СправУч" ("primaryKey");

CREATE INDEX "ТчМестоУч_IСп_3291" on "ТчМестоУч" ("СправУч");

ALTER TABLE "ТчМестоУч"
	ADD CONSTRAINT "ТчМестоУч_FМе_2519" FOREIGN KEY ("МестоУч") REFERENCES "МестоУч" ("primaryKey");

CREATE INDEX "ТчМестоУч_IМе_4666" on "ТчМестоУч" ("МестоУч");

ALTER TABLE "МестоУч"
	ADD CONSTRAINT "МестоУч_FСпра_5273" FOREIGN KEY ("СправСотр") REFERENCES "СправСотр" ("primaryKey");

CREATE INDEX "МестоУч_IСпра_3172" on "МестоУч" ("СправСотр");

ALTER TABLE "СправУч"
	ADD CONSTRAINT "СправУч_FКлас_5016" FOREIGN KEY ("КлассУч") REFERENCES "КлассУч" ("primaryKey");

CREATE INDEX "СправУч_IКлассУч" on "СправУч" ("КлассУч");

ALTER TABLE "СправУч"
	ADD CONSTRAINT "СправУч_FСпра_6148" FOREIGN KEY ("СправРод") REFERENCES "СправРод" ("primaryKey");

CREATE INDEX "СправУч_IСпра_3797" on "СправУч" ("СправРод");

ALTER TABLE "СправУч"
	ADD CONSTRAINT "СправУч_FНомер_0" FOREIGN KEY ("Номер") REFERENCES "Номер" ("primaryKey");

CREATE INDEX "СправУч_IНомер" on "СправУч" ("Номер");

ALTER TABLE "Просмотр"
	ADD CONSTRAINT "Просмотр_FСпр_7466" FOREIGN KEY ("СправРод") REFERENCES "СправРод" ("primaryKey");

CREATE INDEX "Просмотр_IСпра_98" on "Просмотр" ("СправРод");

ALTER TABLE "STORMWEBSEARCH"
	ADD CONSTRAINT "STORMWEBSEARCH_FSTORMFILT_6521" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");

ALTER TABLE "STORMFILTERDETAIL"
	ADD CONSTRAINT "STORMFILTERDETAIL_FSTORMF_2900" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");

ALTER TABLE "STORMFILTERLOOKUP"
	ADD CONSTRAINT "STORMFILTERLOOKUP_FSTORMF_1583" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");


