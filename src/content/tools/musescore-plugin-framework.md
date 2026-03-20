---
title: "MuseScore Plugin Framework"
description: "Core plugin architecture for Bestiary creatures"
type: "library"
status: "development"
order: 1
tags: ["MuseScore", "QML", "framework"]
---

## Plugin Architecture

The MuseScore Plugin Framework provides the foundational infrastructure for implementing Bestiary creatures as MuseScore 4 plugins. Each creature is conceived as an autonomous agent that can be invoked from within the score editor, generating musical material, transforming existing notation, or suggesting compositional possibilities based on configurable parameters and aesthetic principles.

Bestiary plugins are written in QML (Qt Meta Language), MuseScore's plugin language, which provides access to the score's internal representation while maintaining a clean separation between user interface and musical logic. The framework establishes standardized patterns for: reading score data (notes, rhythms, harmonic context), applying transformations (melodic, harmonic, rhythmic), generating new material from constraints, and writing back to the score. This architecture enables rapid development of new creatures while ensuring they operate predictably within the MuseScore environment.

## Core Design Principles

The framework is built on several core principles. First, *modularity*: each creature should operate independently while being able to receive information from other creatures or from the broader score context. Second, *constraint as liberation* creatures function within parameter spaces defined by the user (scale, harmonic palette, rhythmic profile, etc.), and within these constraints they generate material that might not have been obvious without imaginative exploration. Third, *transparency*: users can inspect the reasoning of each creature, understanding not just *what* it generated but *why*—what rules it followed, what possibilities it considered and rejected.

The framework provides utilities for common tasks: scale/mode analysis, interval classification, rhythmic pattern matching and generation, harmonic analysis. These utilities are designed to be culture-sensitive, supporting not just Western tonal analysis but also approaches suited to modal and microtonal music. A creature designed for Arabic maqam work, for instance, can access interval libraries and analysis tools appropriate to that tradition, while a creature focused on cross-cultural rhythm can work with beat divisions and metric structures beyond Western common time.

The plugin framework also establishes conventions for the user interface of each creature—a balance between accessibility (intuitive controls for non-specialist users) and depth (advanced parameters for practitioners seeking fine-grained control). Each creature comes with documentation explaining its compositional philosophy and suggested use cases, inviting users to explore the creature not as a black box but as a collaborator with a distinct personality and approach.
