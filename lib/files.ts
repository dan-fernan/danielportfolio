import { FileCode2, FileText, type LucideIcon } from "lucide-react"

export type FileEntry = {
    id: string;
    label: string;
    path: string;
    icon: LucideIcon;
    color: string;
};

export const ROOT_FILES: FileEntry[] = [
    { id: "home", label: "home.md", path: "/", icon: FileText, color: "var(--color-type)"},
    { id: "experience", label: "experience.md", path: "/experience", icon: FileText, color: "var(--color-type)" },
    { id: "contact", label: "contact.tsx", path: "/contact", icon: FileCode2, color: "var(--color-blue)" },
];

export const PROJECT_FILES: FileEntry[] = [
    { id: "codejam", label: "codejam.tsx", path: "/projects/codejam", icon: FileCode2, color: "var(--color-blue)"},
    { id: "codeburrow", label: "codeburrow.py", path: "/projects/codeburrow", icon: FileCode2, color: "var(--color-blue)"},
    { id: "maps", label: "maps.tsx", path: "/projects/maps", icon: FileCode2, color: "var(--color-blue)"},
]

export const RESUME_FILE: FileEntry = {
    id: "resume",
    label: "resume.pdf",
    path: "/resume",
    icon: FileText,
    color: "var(--color-string)",
}

export const ALL_FILES: FileEntry[] = [...ROOT_FILES, ...PROJECT_FILES, RESUME_FILE]

export function getFileByPath(path: string): FileEntry | undefined {
    return ALL_FILES.find((file) => file.path === path);
}