export interface ProjectData {
  id: string;
  title: string;
  unit: string;
  shortDesc: string;
  fullDesc: string;
  objectives: string[];
  imageUrl?: string | null;
}

export interface MemberData {
  id: string;
  name: string;
  role: string;
  category: string;
  bio?: string | null;
  imageUrl?: string | null;
  email?: string | null;
  linkedin?: string | null;
  scholarUrl?: string | null;
  orderIndex: number;
}

export interface PublicationData {
  id: string;
  title: string;
  authors: string;
  journal: string;
  year: number;
  doi?: string | null;
  linkUrl?: string | null;
  abstract?: string | null;
}

export const FALLBACK_PROJECTS: ProjectData[] = [
  {
    id: 'p1',
    title: 'Aging Biology Unit (ABU)',
    unit: 'ABU',
    shortDesc: 'Focused on fundamental mechanisms of brain aging, including oxidative stress, iron dysregulation, glial dysfunction, and age-related cellular resilience, with emphasis on gray and white matter integrity.',
    fullDesc: 'The Aging Biology Unit (ABU) investigates the primary cellular and molecular pathways that govern brain senescence. Our research focuses on how oxidative stress and iron dysregulation accumulate in neural tissues over time, leading to mitochondrial dysfunction and glial senescence. A major area of investigation is white matter integrity—specifically how myelin-producing oligodendrocytes maintain axonal support under age-related metabolic stress. By identifying the key regulators of age-related cellular resilience, ABU aims to uncover novel therapeutic targets to delay or reverse cognitive decline.',
    objectives: [
      'Elucidate the molecular links between iron accumulation (ferroptosis pathway) and oligodendrocyte vulnerability.',
      'Investigate the impact of glial senescence (microglia and astrocytes) on age-related synaptic pruning and gray matter integrity.',
      'Develop translational strategies using small molecules to enhance cellular resilience and preserve myelin health during healthy aging.'
    ],
    imageUrl: null
  },
  {
    id: 'p2',
    title: 'Dementia & Neurovascular Biology Unit (DNBU)',
    unit: 'DNBU',
    shortDesc: 'Focused on disease mechanisms underlying neurodegeneration, with emphasis on vascular contributions, white matter injury, neuroinflammation, and neurovascular unit breakdown.',
    fullDesc: 'The Dementia & Neurovascular Biology Unit (DNBU) explores how vascular health affects brain health. Specifically, we investigate the structure and function of the neurovascular unit (NVU), which comprises endothelial cells, pericytes, astrocytes, and microglia. Breakdown of the NVU and subsequent blood-brain barrier (BBB) leakage are key early events in vascular dementia and Alzheimer’s disease. Our researchers analyze how neurovascular impairment contributes to white matter injury, microglial activation, and persistent neuroinflammation, driving progressive cognitive decline.',
    objectives: [
      'Map the spatial-temporal dynamics of neurovascular unit breakdown in preclinical models of Alzheimer’s and vascular dementia.',
      'Identify the signaling pathways driving pericyte loss and subsequent capillary rarefaction in white matter tract degeneration.',
      'Evaluate the therapeutic efficacy of restoring BBB integrity to suppress chronic neuroinflammation and preserve cognitive function.'
    ],
    imageUrl: null
  }
];

export const FALLBACK_MEMBERS: MemberData[] = [
  // BRAIV Lab Members
  {
    id: 'm1',
    name: 'Dr. Sarah Lin, PhD',
    role: 'Lab Director & Principal Investigator',
    category: 'MEMBER',
    bio: 'Dr. Lin is an Associate Professor of Neuroscience. Her research focuses on the molecular pathways of brain aging and neurovascular dysfunction. She has published over 60 papers in leading journals and is a recipient of multiple NIH research grants.',
    email: 'sarah.lin@braivlab.org',
    linkedin: 'https://linkedin.com',
    scholarUrl: 'https://scholar.google.com',
    orderIndex: 1,
    imageUrl: null
  },
  {
    id: 'm2',
    name: 'Dr. Marcus Vance, PhD',
    role: 'Postdoctoral Research Fellow',
    category: 'MEMBER',
    bio: 'Marcus focuses on the mechanisms of ferroptosis and iron dysregulation in oligodendrocytes within the Aging Biology Unit (ABU). He received his PhD in Molecular Biology from Stanford University.',
    email: 'marcus.vance@braivlab.org',
    linkedin: 'https://linkedin.com',
    scholarUrl: 'https://scholar.google.com',
    orderIndex: 2,
    imageUrl: null
  },
  {
    id: 'm3',
    name: 'Elena Rostova',
    role: 'Lead Laboratory Manager & Researcher',
    category: 'MEMBER',
    bio: 'Elena oversees laboratory operations and manages advanced imaging platforms. Her research focuses on high-resolution confocal microscopy and tissue histology workflows.',
    email: 'elena.rostova@braivlab.org',
    linkedin: 'https://linkedin.com',
    orderIndex: 3,
    imageUrl: null
  },
  {
    id: 'm4',
    name: 'Julian Carter',
    role: 'Graduate Research Assistant (PhD Candidate)',
    category: 'MEMBER',
    bio: 'Julian is investigating neurovascular unit breakdown and pericyte signaling pathways under conditions of chronic hypoperfusion within the Dementia & Neurovascular Biology Unit (DNBU).',
    email: 'julian.carter@braivlab.org',
    linkedin: 'https://linkedin.com',
    orderIndex: 4,
    imageUrl: null
  },
  {
    id: 'm5',
    name: 'Maya Patel',
    role: 'Graduate Research Assistant (PhD Candidate)',
    category: 'MEMBER',
    bio: 'Maya’s research combines single-cell RNA-seq and bioinformatics to study microglial activation states in aging white matter.',
    email: 'maya.patel@braivlab.org',
    scholarUrl: 'https://scholar.google.com',
    orderIndex: 5,
    imageUrl: null
  },

  // Visiting Members
  {
    id: 'm6',
    name: 'Dr. Hiroshi Tanaka, MD, PhD',
    role: 'Visiting Professor',
    category: 'VISITING',
    bio: 'Dr. Tanaka is a Professor of Neurology at Kyoto University. He is collaborating with the DNBU on clinical biomarkers for vascular cognitive impairment.',
    email: 'hiroshi.tanaka@kyoto-u.ac.jp',
    scholarUrl: 'https://scholar.google.com',
    orderIndex: 1,
    imageUrl: null
  },
  {
    id: 'm7',
    name: 'Sofia Martinez',
    role: 'Visiting Graduate Scholar',
    category: 'VISITING',
    bio: 'Sofia is a PhD candidate from the University of Barcelona, studying glial-neuronal metabolic coupling in cerebral amyloid angiopathy models.',
    email: 'sofia.martinez@ub.edu',
    orderIndex: 2,
    imageUrl: null
  },

  // Alumni Members
  {
    id: 'm8',
    name: 'Dr. Clara Thorne, PhD',
    role: 'Former PhD Student (Graduated 2024)',
    category: 'ALUMNI',
    bio: 'Clara’s doctoral thesis focused on oligodendrocyte lineage survival during chronic ischemia. She is currently a Postdoctoral Researcher at Harvard Medical School.',
    linkedin: 'https://linkedin.com',
    scholarUrl: 'https://scholar.google.com',
    orderIndex: 1,
    imageUrl: null
  },
  {
    id: 'm9',
    name: 'Dr. James Cho, PhD',
    role: 'Former Postdoctoral Fellow (2021-2024)',
    category: 'ALUMNI',
    bio: 'James led early research into iron-induced lipid peroxidation in aged microglia. He is now a Senior Scientist at a leading biotechnology firm.',
    linkedin: 'https://linkedin.com',
    orderIndex: 2,
    imageUrl: null
  },
  {
    id: 'm10',
    name: 'Ananya Roy',
    role: 'Former Undergraduate Researcher (2022-2024)',
    category: 'ALUMNI',
    bio: 'Ananya worked on histological analysis of mouse white matter. She is currently pursuing her MD/PhD at Johns Hopkins University.',
    linkedin: 'https://linkedin.com',
    orderIndex: 3,
    imageUrl: null
  }
];

export const FALLBACK_PUBLICATIONS: PublicationData[] = [
  {
    id: 'pub1',
    title: 'Iron dysregulation and lipid peroxidation drive oligodendrocyte ferroptosis in the aging white matter',
    authors: 'Vance M., Rostova E., Lin S.',
    journal: 'Nature Neuroscience',
    year: 2025,
    doi: '10.1038/s41593-025-01824-x',
    linkUrl: 'https://doi.org/10.1038/s41593-025-01824-x',
    abstract: 'Loss of white matter integrity is a hallmark of brain aging and cognitive decline, yet the cellular death pathways in myelin-producing oligodendrocytes remain poorly defined. Here, we demonstrate that age-associated iron accumulation triggers lipid peroxidation and ferroptosis in mature oligodendrocytes. Therapeutic inhibition of ferroptosis rescues white matter tracts and prevents age-related sensorimotor deficits, highlighting a novel target for preserving myelination in the aging brain.'
  },
  {
    id: 'pub2',
    title: 'Pericyte degeneration and neurovascular unit breakdown in a mouse model of cerebral amyloid angiopathy',
    authors: 'Carter J., Tanaka H., Lin S.',
    journal: 'Glia',
    year: 2024,
    doi: '10.1002/glia.24581',
    linkUrl: 'https://doi.org/10.1002/glia.24581',
    abstract: 'Microvascular dysfunction is increasingly recognized as a key contributor to Alzheimer\'s disease pathogenesis. In this study, we track the progressive loss of pericytes at the neurovascular unit, showing that vascular basement membrane thickening precedes microglial activation. Protecting pericyte integrity via platelet-derived growth factor signaling restores blood-brain barrier closure and dampens reactive astrogliosis, preserving spatial memory.'
  },
  {
    id: 'pub3',
    title: 'Single-cell transcriptomics reveals regional diversity of microglial activation in white versus gray matter during brain senescence',
    authors: 'Patel M., Thorne C., Lin S.',
    journal: 'Journal of Neuroscience',
    year: 2023,
    doi: '10.1523/JNEUROSCI.1092-23.2023',
    linkUrl: 'https://doi.org/10.1523/JNEUROSCI.1092-23.2023',
    abstract: 'Microglia exhibit heterogeneous phenotypes across different brain regions. We used single-cell RNA sequencing to profile microglia from the cerebral cortex (gray matter) and corpus callosum (white matter) of young and aged mice. We identify a unique white matter-associated microglial cluster characterized by high expression of lipid clearance and lysosomal genes, which correlates with myelin debris accumulation.'
  },
  {
    id: 'pub4',
    title: 'Oligodendrocyte precursor cell dynamics and myelination efficacy in chronic vascular hypoperfusion',
    authors: 'Thorne C., Rostova E., Vance M., Lin S.',
    journal: 'Acta Neuropathologica',
    year: 2022,
    doi: '10.1007/s00401-022-02450-4',
    linkUrl: 'https://doi.org/10.1007/s00401-022-02450-4',
    abstract: 'White matter injury due to chronic hypoperfusion is a major cause of vascular dementia. We investigate how oligodendrocyte precursor cells (OPCs) respond to ischemia, demonstrating that while OPC proliferation increases in demyelinated lesions, their maturation into myelinating oligodendrocytes is blocked by local inflammatory signals. Blocking these inhibitory signals restores myelination and rescues nerve conduction velocity.'
  }
];
