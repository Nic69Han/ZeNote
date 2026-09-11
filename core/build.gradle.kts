plugins {
    kotlin("multiplatform") version "2.1.0"
}

repositories {
    mavenCentral()
}

kotlin {
    // Seule la cible JVM est déclarée pour l'instant : elle couvre Android et le poste
    // Windows, et c'est la seule que la machine de développement peut construire.
    // Les cibles `androidTarget()` et `mingwX64()` s'ajouteront ici sans toucher au
    // code de `commonMain`, une fois le SDK Android disponible (tâches 1.1 et 1.3).
    jvm()

    sourceSets {
        commonMain.dependencies {
            implementation("org.jetbrains.kotlinx:kotlinx-datetime:0.6.1")
        }
        commonTest.dependencies {
            implementation(kotlin("test"))
        }
    }
}

tasks.withType<Test> {
    useJUnitPlatform()
}
