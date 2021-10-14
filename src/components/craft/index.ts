import {
  CraftActivity,
  CraftBackground,
  CraftButton,
  CraftCard,
  CraftCarousel,
  CraftCarouselContainer,
  CraftCollapse,
  CraftContainer,
  CraftCreator,
  CraftEmbed,
  CraftImage,
  CraftInstructor,
  CraftLayout,
  CraftParagraph,
  CraftPodcastProgram,
  CraftProgram,
  CraftProgramCollection,
  CraftProject,
  CraftStatistics,
  CraftTitle,
  CraftTitleAndParagraph,
} from 'lodestar-app-element/src/components/craft'
import {
  ActivitySettings,
  BackgroundSettings,
  ButtonSettings,
  CardSettings,
  CarouselContainerSettings,
  CarouselSettings,
  CollapseSettings,
  ContainerSettings,
  CreatorSettings,
  EmbedSettings,
  ImageSettings,
  InstructorSettings,
  LayoutSettings,
  ParagraphSettings,
  PodcastProgramSettings,
  ProgramCollectionSettings,
  ProgramSettings,
  ProjectSettings,
  StatisticsSettings,
  TitleAndParagraphSettings,
  TitleSettings,
} from '../../components/craft/settings'
import CraftToolBox from './CraftToolBox'

const configureResolver = () => {
  CraftActivity.craft = {
    related: {
      settings: ActivitySettings,
    },
    custom: {
      button: {
        label: 'deleteBlock',
      },
    },
  }
  CraftProgramCollection.craft = {
    related: {
      settings: ProgramCollectionSettings,
    },
    custom: {
      button: {
        label: 'deleteBlock',
      },
    },
  }
  CraftBackground.craft = {
    related: {
      settings: BackgroundSettings,
    },
    custom: {
      button: {
        label: 'deleteAllBlock',
      },
    },
  }
  CraftButton.craft = {
    related: {
      settings: ButtonSettings,
    },
    custom: {
      button: {
        label: 'deleteBlock',
      },
    },
  }
  CraftCard.craft = {
    related: {
      settings: CardSettings,
    },
    custom: {
      button: {
        label: 'deleteBlock',
      },
    },
  }
  CraftCarousel.craft = {
    related: {
      settings: CarouselSettings,
    },
    custom: {
      button: {
        label: 'deleteAllBlock',
      },
    },
  }
  CraftCarouselContainer.craft = {
    related: {
      settings: CarouselContainerSettings,
    },
    custom: {
      button: {
        label: 'deleteAllBlock',
      },
    },
  }
  CraftCollapse.craft = {
    related: {
      settings: CollapseSettings,
    },
    custom: {
      button: {
        label: 'deleteBlock',
      },
    },
  }
  CraftContainer.craft = {
    related: {
      settings: ContainerSettings,
    },
    custom: {
      button: {
        label: 'deleteBlock',
      },
    },
  }
  CraftImage.craft = {
    related: {
      settings: ImageSettings,
    },
    custom: {
      button: {
        label: 'deleteBlock',
      },
    },
  }
  CraftInstructor.craft = {
    related: {
      settings: InstructorSettings,
    },
  }
  CraftCreator.craft = {
    related: {
      settings: CreatorSettings,
    },
  }
  CraftLayout.craft = {
    related: {
      settings: LayoutSettings,
    },
    custom: {
      button: {
        label: 'deleteAllBlock',
      },
    },
  }
  CraftParagraph.craft = {
    related: {
      settings: ParagraphSettings,
    },
    custom: {
      button: {
        label: 'deleteBlock',
      },
    },
  }
  CraftPodcastProgram.craft = {
    related: {
      settings: PodcastProgramSettings,
    },
  }
  CraftProgram.craft = {
    related: {
      settings: ProgramSettings,
    },
  }
  CraftProject.craft = {
    related: {
      settings: ProjectSettings,
    },
  }
  CraftStatistics.craft = {
    related: {
      settings: StatisticsSettings,
    },
    custom: {
      button: {
        label: 'deleteBlock',
      },
    },
  }
  CraftTitle.craft = {
    related: {
      settings: TitleSettings,
    },
    custom: {
      button: {
        label: 'deleteBlock',
      },
    },
  }
  CraftTitleAndParagraph.craft = {
    related: {
      settings: TitleAndParagraphSettings,
    },
    custom: {
      button: {
        label: 'deleteBlock',
      },
    },
  }
  CraftEmbed.craft = {
    related: {
      settings: EmbedSettings,
    },
    custom: {
      button: {
        label: 'deleteBlock',
      },
    },
  }

  return {
    CraftActivity,
    CraftBackground,
    CraftButton,
    CraftCard,
    CraftCarousel,
    CraftCarouselContainer,
    CraftCollapse,
    CraftContainer,
    CraftCreator,
    CraftEmbed,
    CraftImage,
    CraftInstructor,
    CraftLayout,
    CraftParagraph,
    CraftPodcastProgram,
    CraftProgram,
    CraftProgramCollection,
    CraftProject,
    CraftStatistics,
    CraftTitle,
    CraftTitleAndParagraph,
  }
}

export { configureResolver, CraftToolBox }
