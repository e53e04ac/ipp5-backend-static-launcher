/*!
    @e53e04ac/ipp5-backend-static-launcher/index.d.ts
    Copyright (C) @e53e04ac
    MIT License
*/

import { AzureTerraformer } from 'azure-terraformer';
import { EventEmitter } from 'event-emitter';
import { FileEntry } from 'file-entry';
import { Get } from 'hold';
import { ValueOrGet } from 'hold';

export declare namespace Ipp5BackendStaticLauncher {

    type EnvMap = {
        readonly TZ: string;
        readonly WEBSITES_PORT: number;
        readonly CUSTOM_BACKEND_STATIC_HTTP_PATH_PREFIX: string;
        readonly CUSTOM_CONTAINER_DOCUMENT_ROOT_DIRECTORY_PATH: string;
        readonly CUSTOM_EXPRESS_ENV: 'production' | 'development';
        readonly CUSTOM_EXPRESS_SUBDOMAIN_OFFSET: number;
        readonly CUSTOM_EXPRESS_TRUST_PROXY: string;
    };

    type EventSpecs = Record<never, never>;

    type Options = {
        readonly az: ValueOrGet<string>;
        readonly docker: ValueOrGet<string>;
        readonly tmpDirectory: ValueOrGet<FileEntry>;
        readonly launchId: ValueOrGet<string>;
        readonly containerImageName: ValueOrGet<string>;
        readonly containerTimezoneId: ValueOrGet<string>;
        readonly containerAppPort: ValueOrGet<number>;
        readonly acrSubscription: ValueOrGet<string>;
        readonly acrName: ValueOrGet<string>;
        readonly webappSubscription: ValueOrGet<string>;
        readonly webappResourceGroup: ValueOrGet<string>;
        readonly webappName: ValueOrGet<string>;
        readonly webappDeploymentContainerImageName: ValueOrGet<string>;
        readonly backendStaticHttpPathPrefix: ValueOrGet<string>;
        readonly containerDocumentRootDirectoryPath: ValueOrGet<string>;
    };

    type _Self = {
        readonly options: Get<Options>;
        readonly _options: Get<unknown>;
        readonly scriptFile: Get<FileEntry>;
        readonly scriptDirectory: Get<FileEntry>;
        readonly runDirectory: Get<FileEntry>;
        readonly settingsJson: Get<FileEntry>;
        readonly azureTerraformer: Get<AzureTerraformer>;
        readonly makeSettingsJson: Get<Promise<void>>;
        readonly runAzAcrLogin: Get<Promise<void>>;
        readonly runDockerImageTag: Get<Promise<void>>;
        readonly runDockerImagePush: Get<Promise<void>>;
        readonly runAzWebappConfigAppsettingsSet: Get<Promise<void>>;
        readonly runAzWebappRestart: Get<Promise<void>>;
    };

    type Self = EventEmitter<EventSpecs> & {
        readonly _Ipp5BackendStaticLauncher: Get<_Self>;
        readonly launch: Get<Promise<void>>;
    };

    type Constructor = {
        (options: Options): Self;
    };

    type Companion = Record<never, never>;

    type ConstructorWithCompanion = Constructor & Companion;

}

export declare type Ipp5BackendStaticLauncher = Ipp5BackendStaticLauncher.Self;

export declare const Ipp5BackendStaticLauncher: Ipp5BackendStaticLauncher.ConstructorWithCompanion;
