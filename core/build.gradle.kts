plugins {
    kotlin("multiplatform") version "2.1.0"
    kotlin("plugin.serialization") version "2.1.0"
}

repositories {
    mavenCentral()
}

kotlin {
    // Android et le poste Windows passeront par cette cible ; elle porte aussi les
    // tests de référence du domaine.
    jvm()

    // Cible navigateur : la PWA consomme exactement le même cœur que les futures
    // applications natives. La logique de priorisation ne peut donc pas diverger.
    js(IR) {
        browser {
            testTask {
                useKarma { useChromeHeadless() }
            }
        }
        binaries.library()
        generateTypeScriptDefinitions()
    }

    sourceSets {
        commonMain.dependencies {
            implementation("org.jetbrains.kotlinx:kotlinx-datetime:0.6.1")
            implementation("org.jetbrains.kotlinx:kotlinx-serialization-json:1.7.3")
        }
        commonTest.dependencies {
            implementation(kotlin("test"))
        }
    }
}

tasks.withType<Test> {
    useJUnitPlatform()
}
