export interface Repository {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  updated_at: string;
  created_at: string;
  topics: string[];
  homepage: string | null;
  clone_url: string;
  size: number;
  license: {
    name: string;
    spdx_id: string;
  } | null;
  private: boolean;
  default_branch: string;
}
